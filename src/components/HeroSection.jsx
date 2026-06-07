export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Direct Procurement for Healthcare Facilities
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Wholesale pricing for hospitals and clinics across Nigeria. Access 500+ medical equipment models with guaranteed 48-hour delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Browse Equipment
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all">
                Request Catalog
              </button>
            </div>
          </div>

          {/* Right Visual - 2x2 Equipment Category Cards */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {[
              { name: 'Ultrasound Machine', image: '/ultrasound-machine.jpg' },
              { name: 'Digital X-Ray', image: '/digital-xray.jpg' },
              { name: 'Patient Monitor', image: '/patient-monitor.jpg' },
              { name: 'Surgical Equipment', image: '/surgical-equipment.jpg' },
            ].map((card) => (
              <div key={card.name} className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col">
                <img src={card.image} alt={card.name} className="w-full h-28 object-cover" />
                <div className="px-3 py-2.5 text-center">
                  <span className="text-gray-800 text-sm font-semibold">{card.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
