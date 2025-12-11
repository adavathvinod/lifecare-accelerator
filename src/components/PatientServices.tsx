import { Shield, CreditCard, FileText, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Insurance & Cashless",
    description: "We accept all major insurance providers and offer hassle-free cashless treatment facility.",
    features: ["TPA tie-ups with 50+ insurers", "Quick claim processing", "Dedicated insurance desk"],
  },
  {
    icon: HeartPulse,
    title: "Health Checkup Packages",
    description: "Comprehensive health screening packages designed for early detection and prevention.",
    features: ["Basic Health Package", "Executive Health Package", "Cardiac Health Package", "Women's Health Package"],
  },
  {
    icon: FileText,
    title: "Medical Records",
    description: "Secure digital access to your medical records and test results.",
    features: ["Online report access", "Digital prescriptions", "Medical history tracking"],
  },
  {
    icon: CreditCard,
    title: "Payment Options",
    description: "Flexible payment options to suit your convenience.",
    features: ["All major cards accepted", "UPI & Net Banking", "EMI options available"],
  },
];

const PatientServices = () => {
  return (
    <section id="patient-care" className="section-padding gradient-teal-light">
      <div className="container-hospital">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Patient Support
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Care for Your Convenience
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience hassle-free healthcare with our comprehensive patient support services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            What Our Patients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ramesh Kumar",
                treatment: "Cardiac Surgery",
                text: "The care I received at Life Care Hospitals was exceptional. The doctors and staff were professional and compassionate throughout my treatment.",
              },
              {
                name: "Lakshmi Devi",
                treatment: "Orthopedic Surgery",
                text: "After my knee replacement surgery, the rehabilitation support was excellent. I'm now walking without pain. Thank you, Life Care!",
              },
              {
                name: "Srinivas Rao",
                treatment: "General Medicine",
                text: "The health checkup package was comprehensive and affordable. The doctors explained everything clearly and suggested preventive measures.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-warning fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-primary">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientServices;
