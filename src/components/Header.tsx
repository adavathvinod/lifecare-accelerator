import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Calendar, ChevronDown } from "lucide-react";
import logoIcon from "@/assets/logo-icon-purple.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Specialties", href: "#specialties" },
    { name: "Our Doctors", href: "#doctors" },
    { name: "Facilities", href: "#facilities" },
    { name: "Patient Care", href: "#patient-care" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-hospital">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logoIcon} alt="Life Care Hospitals" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${isScrolled ? "text-primary" : "text-primary-foreground"}`}>
                Life Care
              </span>
              <span className={`text-xs font-medium tracking-wider ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"}`}>
                HOSPITALS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:bg-accent hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919876543210">
              <Button
                variant={isScrolled ? "outline" : "heroOutline"}
                size="sm"
                className={!isScrolled ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : ""}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">+91 98765 43210</span>
              </Button>
            </a>
            <a href="#appointment">
              <Button variant={isScrolled ? "default" : "hero"} size="sm">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/20 pt-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-foreground hover:bg-accent"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/20">
              <a href="tel:+919876543210">
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </Button>
              </a>
              <a href="#appointment">
                <Button className="w-full">
                  <Calendar className="h-4 w-4" />
                  Book Appointment
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
