import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Map Section */}
      <div className="w-full h-[300px] md:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5476!2d78.4458!3d17.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Life Care Hospitals Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Main Footer Content */}
      <div className="container-hospital py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logoIcon} alt="Life Care Hospitals" className="h-10 w-10 brightness-0 invert" />
              <div>
                <span className="text-xl font-bold text-background">Life Care</span>
                <span className="block text-xs text-background/70 tracking-wider">HOSPITALS</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Life Care Hospitals is a premier multi-specialty hospital in Hyderabad, dedicated to providing world-class healthcare services with compassion and expertise.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-background mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#" },
                { name: "Our Specialties", href: "#specialties" },
                { name: "Find a Doctor", href: "#doctors" },
                { name: "Facilities", href: "#facilities" },
                { name: "Patient Services", href: "#patient-care" },
                { name: "Careers", href: "#" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-lg font-bold text-background mb-6">Our Specialties</h3>
            <ul className="space-y-3">
              {[
                "Critical Care",
                "Cardiology",
                "Neurology",
                "Orthopedics",
                "OBG & Gynaecology",
                "Urology",
              ].map((specialty, i) => (
                <li key={i}>
                  <a
                    href="#specialties"
                    className="text-background/70 hover:text-background hover:translate-x-1 transition-all inline-block"
                  >
                    {specialty}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-background mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/70 text-sm">
                  Life Care Hospitals, Kukatpally,<br />
                  Hyderabad, Telangana 500072
                </span>
              </li>
              <li>
                <a href="tel:+919876543210" className="flex gap-3 text-background/70 hover:text-background transition-colors">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="tel:108" className="flex gap-3 text-background/70 hover:text-background transition-colors">
                  <Phone className="h-5 w-5 text-emergency flex-shrink-0" />
                  <span className="text-sm">Emergency: 108</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@lifecarehospitals.com" className="flex gap-3 text-background/70 hover:text-background transition-colors">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">info@lifecarehospitals.com</span>
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-background/70">
                  <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p>Emergency: 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-hospital py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2024 Life Care Hospitals. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
