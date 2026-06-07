import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Trust Bar */}
      <div className="bg-gray-100 border-b border-gray-200 py-3">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-10 text-sm text-gray-600 flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="font-medium whitespace-nowrap">ISO Certified Supplier</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="font-medium whitespace-nowrap">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="font-medium whitespace-nowrap">200+ Facilities Served</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="font-medium whitespace-nowrap">48hr Nationwide Delivery</span>
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1">
        <HomePage />
      </main>
      <footer className="bg-gray-900 text-gray-100 py-8">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">MENMED</h3>
              <p className="text-gray-400 text-sm">
                Leading B2B medical equipment supplier for healthcare facilities in Nigeria.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Medical Equipment</a></li>
                <li><a href="#" className="hover:text-primary">Imaging Systems</a></li>
                <li><a href="#" className="hover:text-primary">Point of Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary">Documentation</a></li>
                <li><a href="#" className="hover:text-primary">Support & Parts</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">
                Email: menmed4u@gmail.com<br />
                Phone: +2348089770474
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2026 MENMED. All rights reserved. Lagos, Nigeria.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
