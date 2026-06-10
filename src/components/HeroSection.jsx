import { Activity, Scan, HeartPulse, Stethoscope } from 'lucide-react';

export default function HeroSection({ onRequestQuote }) {
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
              <button
                onClick={onRequestQuote}
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Browse Equipment
              </button>
              <button
                onClick={onRequestQuote}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all"
              >
                Request Catalog
              </button>
            </div>
          </div>

          {/* Right Visual - 2x2 Equipment Category Cards */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {[
              { name: 'Ultrasound Machine', Icon: Activity },
              { name: 'Digital X-Ray', Icon: Scan },
              { name: 'Patient Monitor', Icon: HeartPulse },
              { name: 'Surgical Equipment', Icon: Stethoscope },
            ].map(({ name, Icon }) => (
              <div
                key={name}
                className="rounded-xl flex flex-col items-center justify-center py-8 gap-3 shadow-md transition-colors duration-200 cursor-pointer"
                style={{
                  backgroundColor: '#0D2444',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#163461'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0D2444'}
              >
                <Icon size={64} color="white" strokeWidth={1.5} />
                <span className="text-white text-sm font-bold text-center px-2">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
