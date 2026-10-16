// src/components/Footer.tsx

import { Phone, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-deepEspresso text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation */}
        <div>
          <h3 className="font-serif text-terracotta mb-4">Quick Links</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <a href={link.href} className="hover:text-warmCopper transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-serif text-terracotta mb-4">Contact Us</h3>
          <p className="flex items-center mb-2">
            <Phone className="mr-2" size={18} /> +1 234 567 890
          </p>
          <p className="flex items-center">
            <Mail className="mr-2" size={18} /> info@sriparnithei.com
          </p>
        </div>
        {/* Branding */}
        <div className="text-center md:text-right">
          <div className="w-12 h-12 bg-terracotta rounded mb-4 mx-auto md:ml-auto" />
          <p className="text-sm">© 2026 Sri Parinithee Infra Developers Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
