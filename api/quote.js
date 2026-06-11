import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: 'Missing Supabase environment variables' })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    const { full_name, organization, email, category, message } = req.body

    const { data, error } = await supabase
      .from('quotes')
      .insert([{ full_name, organization, email, category, message }])

    if (error) {
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ success: true, data })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
