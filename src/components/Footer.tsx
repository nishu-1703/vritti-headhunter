import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="py-16 border-t border-blue-700" style={{ backgroundColor: '#0B3C5D', color: '#E5E7EB' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-heading font-black text-2xl mb-6" style={{ color: '#E5E7EB' }}>Vritti</h3>
            <p className="text-sm" style={{ color: '#E5E7EB' }}>Connecting exceptional talent with visionary companies.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#E5E7EB' }}>Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm transition-colors hover:opacity-80" style={{ color: '#E5E7EB' }}>About</Link></li>
              <li><Link href="/services" className="text-sm transition-colors hover:opacity-80" style={{ color: '#E5E7EB' }}>Services</Link></li>
              <li><Link href="/contact" className="text-sm transition-colors hover:opacity-80" style={{ color: '#E5E7EB' }}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: '#E5E7EB' }}>Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: '#E5E7EB' }}>Leadership Hiring</a></li>
              <li><a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: '#E5E7EB' }}>Contract Staffing</a></li>
              <li><a href="#" className="text-sm transition-colors hover:opacity-80" style={{ color: '#E5E7EB' }}>Executive Search</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" style={{ color: '#E5E7EB' }}>Contact</h4>
            <p className="text-sm mb-2" style={{ color: '#E5E7EB' }}>+91-70374-00096</p>
            <p className="text-sm" style={{ color: '#E5E7EB' }}>ceo@vheadhunt.com</p>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8 text-center text-sm" style={{ color: '#E5E7EB' }}>
          <p>&copy; 2024 Vritti Headhunters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
