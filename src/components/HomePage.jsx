import HeroSection from './HeroSection';

const categories = [
  { name: 'Medical Equipment', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400' },
  { name: 'Imaging Systems', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f3?w=400' },
  { name: 'Point of Care', image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400' },
  { name: 'Surgical Equipment', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400' },
  { name: 'Laboratory Equipment', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400' },
  { name: 'Support & Parts', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400' },
];

const products = [
  {
    name: 'Mindray Patient Monitor',
    description: 'Multi-parameter monitoring with ECG, SpO2, NIBP, and temperature for critical care.',
    image: '/patient-monitor.jpg',
  },
  {
    name: 'GE Ultrasound Machine',
    description: 'High-resolution imaging for obstetric, abdominal, and cardiac diagnostics.',
    image: '/ultrasound-machine.jpg',
  },
  {
    name: 'Philips X-Ray System',
    description: 'Digital radiography with high-sensitivity detector for accurate diagnostics.',
    image: '/digital-xray.jpg',
  },
  {
    name: 'CPAP Machine',
    description: 'Continuous positive airway pressure therapy for sleep apnea and respiratory support.',
    image: '/surgical-equipment.jpg',
  },
];

const testimonials = [
  {
    quote: 'MENMED has transformed how we source medical equipment. Their delivery speed and product quality are unmatched in Nigeria. Highly recommended for any teaching hospital.',
    name: 'Dr. Adebayo',
    hospital: 'Lagos University Teaching Hospital',
  },
  {
    quote: 'We have been sourcing imaging equipment from MENMED for over two years. Competitive pricing, genuine products, and excellent after-sales support every time.',
    name: 'Mrs. Okonkwo',
    hospital: 'Federal Medical Centre Abuja',
  },
  {
    quote: 'The procurement process with MENMED is seamless. From quotation to delivery, everything is professional. Our facility now runs on mostly MENMED-supplied equipment.',
    name: 'Dr. Ibrahim',
    hospital: 'Aminu Kano Teaching Hospital',
  },
];

export default function HomePage({ onRequestQuote }) {
  const stats = [
    { number: '500+', label: 'Equipment Models', description: 'Comprehensive catalog of medical devices' },
    { number: '48hr', label: 'Delivery', description: 'Fast nationwide delivery' },
    { number: '200+', label: 'Facilities Served', description: 'Trusted by hospitals and clinics' },
  ];

  return (
    <div>
      <HeroSection onRequestQuote={onRequestQuote} />

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 md:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose MENMED?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Wholesale Pricing</h3>
              <p className="text-gray-600">Competitive rates for bulk orders</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Reliable 48-hour nationwide shipping</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Quality Assured</h3>
              <p className="text-gray-600">Authentic certified medical equipment</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Expert Support</h3>
              <p className="text-gray-600">Dedicated customer support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">Browse by Category</h2>
          <p className="text-gray-500 text-center mb-12">Find the right medical equipment for your facility</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {categories.map((cat, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden h-44 cursor-pointer group shadow-sm">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors flex items-center justify-center">
                  <h3 className="font-bold text-white text-center text-sm md:text-base px-3">{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">Featured Equipment</h2>
          <p className="text-gray-500 text-center mb-12">Top-selling equipment trusted by Nigerian healthcare facilities</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <h3 className="font-bold text-gray-800">{product.name}</h3>
                  <p className="text-gray-500 text-sm flex-1">{product.description}</p>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">Contact for Pricing</p>
                  <button className="w-full py-2.5 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors text-sm">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-3">What Our Clients Say</h2>
          <p className="text-gray-500 text-center mb-12">Trusted by leading healthcare facilities across Nigeria</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex text-orange-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-gray-500 text-sm mt-1">{t.hospital}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Source Medical Equipment?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your facility's procurement needs.
          </p>
          <button className="px-10 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
}
