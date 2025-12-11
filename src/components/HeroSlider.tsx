import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import heroLobby from "@/assets/hero-lobby.jpg";
import heroDoctors from "@/assets/hero-doctors.jpg";
import hospitalExterior from "@/assets/hospital-exterior.png";

const slides = [
  {
    image: heroLobby,
    title: "World-Class Healthcare",
    subtitle: "In the Heart of Hyderabad",
    description: "Experience compassionate, multi-specialty care with cutting-edge technology and expert physicians dedicated to your well-being.",
  },
  {
    image: heroDoctors,
    title: "Expert Medical Team",
    subtitle: "50+ Specialist Doctors",
    description: "Our team of highly qualified doctors brings decades of experience across 15+ specialties to provide you with the best possible care.",
  },
  {
    image: hospitalExterior,
    title: "Modern Infrastructure",
    subtitle: "State-of-the-Art Facilities",
    description: "Advanced diagnostic equipment, modern operation theaters, and comfortable patient rooms designed for your comfort and recovery.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container-hospital">
          <div className="max-w-2xl">
            <div
              key={currentSlide}
              className="animate-slide-up"
            >
              <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full text-primary-foreground text-sm font-medium mb-6">
                {slides[currentSlide].subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#appointment">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Button>
                </a>
                <a href="#specialties">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    Explore Specialties
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary-foreground"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-primary/90 to-transparent pt-20 pb-20">
        <div className="container-hospital">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Specialties" },
              { value: "50+", label: "Expert Doctors" },
              { value: "10K+", label: "Happy Patients" },
              { value: "24/7", label: "Emergency Care" },
            ].map((stat, index) => (
              <div key={index} className="text-primary-foreground">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
