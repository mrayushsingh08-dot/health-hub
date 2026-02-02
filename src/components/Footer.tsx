import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/doctors', label: 'Our Doctors' },
    { path: '/appointment', label: 'Book Appointment' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    'Cardiology',
    'Neurology',
    'Dental Care',
    'Emergency Services',
    'General Medicine',
    'Pediatrics'
  ];

  return (
    <footer className="w-full bg-footerbackground text-primary-foreground">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl text-primary-foreground">HealthCare</h3>
            <p className="font-paragraph text-base text-primary-foreground/80 leading-relaxed">
              Providing compassionate, quality healthcare services to our community since 1985. Your health is our priority.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:bg-primary-foreground hover:text-footerbackground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:bg-primary-foreground hover:text-footerbackground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:bg-primary-foreground hover:text-footerbackground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/30 hover:bg-primary-foreground hover:text-footerbackground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl text-primary-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl text-primary-foreground">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-paragraph text-base text-primary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl text-primary-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/80 mt-1 flex-shrink-0" />
                <p className="font-paragraph text-base text-primary-foreground/80">
                  123 Medical Center Drive<br />
                  Healthcare City, HC 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/80 flex-shrink-0" />
                <a 
                  href="mailto:info@healthcare.com" 
                  className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  info@healthcare.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-primary-foreground/70 text-center md:text-left">
              © {new Date().getFullYear()} HealthCare Medical Center. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="font-paragraph text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="font-paragraph text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
