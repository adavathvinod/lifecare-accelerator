import { useState } from "react";
import { X } from "lucide-react";
import operationTheater from "@/assets/operation-theater.png";
import icuWard from "@/assets/icu-ward.png";
import patientRoom from "@/assets/patient-room.png";
import hospitalExterior from "@/assets/hospital-exterior.png";

const facilities = [
  {
    image: hospitalExterior,
    title: "Modern Hospital Building",
    description: "State-of-the-art multi-specialty hospital with modern architecture and world-class amenities.",
  },
  {
    image: operationTheater,
    title: "Advanced Operation Theaters",
    description: "Fully equipped modular OTs with laminar air flow and latest surgical equipment.",
  },
  {
    image: icuWard,
    title: "ICU & Critical Care Unit",
    description: "24/7 intensive care with advanced life support systems and continuous monitoring.",
  },
  {
    image: patientRoom,
    title: "Comfortable Patient Rooms",
    description: "Clean, well-maintained rooms designed for patient comfort and quick recovery.",
  },
];

const FacilitiesGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="facilities" className="section-padding bg-secondary/30">
      <div className="container-hospital">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            World-Class Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Modern Facilities
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience healthcare in a comfortable, modern environment equipped with the latest medical technology.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-background mb-2">
                  {facility.title}
                </h3>
                <p className="text-sm text-background/80">
                  {facility.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Features List */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "100+", label: "Beds Capacity" },
            { value: "5", label: "Operation Theaters" },
            { value: "20+", label: "ICU Beds" },
            { value: "24/7", label: "Pharmacy & Lab" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border/50"
            >
              <div className="text-3xl font-bold text-primary mb-1">
                {feature.value}
              </div>
              <div className="text-sm text-muted-foreground">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={facilities[selectedImage].image}
              alt={facilities[selectedImage].title}
              className="w-full rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-background">
                {facilities[selectedImage].title}
              </h3>
              <p className="text-background/80 mt-2">
                {facilities[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacilitiesGallery;
