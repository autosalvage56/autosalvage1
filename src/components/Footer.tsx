import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import autoLogo from '@/assets/auto (1).png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={autoLogo} alt="AutoSalvage" className="h-10 sm:h-12 mb-3 sm:mb-4" />
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Genuine auto parts with fast delivery and expert support for all Indian vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors block py-1">About Us</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-primary transition-colors block py-1">Shop Parts</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-primary transition-colors block py-1">Blog</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors block py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-sm hover:text-primary transition-colors block py-1">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-primary transition-colors block py-1">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block">Mon–Sat: 9:30 am–7:30 pm</span>
                  <span className="block">Sun: Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} AutoSalvage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
