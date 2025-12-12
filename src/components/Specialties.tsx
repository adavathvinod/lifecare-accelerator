import { Button } from "@/components/ui/button";
import {
  ActivityIcon,
  HeartPlusIcon,
  BrainIcon,
  BoneIcon,
  BabyIcon,
  DropletIcon,
  StethoscopeIcon,
  MicroscopeIcon,
  ScissorsIcon,
  LungsIcon,
  HeartBeatIcon,
  PillIcon,
} from "@/components/icons/SpecialtyIcons";

const specialties = [
  {
    Icon: ActivityIcon,
    name: "Critical Care",
    description: "24/7 ICU with advanced life support systems and expert intensivists.",
    color: "bg-emergency/10 text-emergency",
  },
  {
    Icon: HeartPlusIcon,
    name: "Cardiology",
    description: "Comprehensive heart care including diagnostics, intervention, and surgery.",
    color: "bg-primary/10 text-primary",
  },
  {
    Icon: BrainIcon,
    name: "Neurology",
    description: "Expert treatment for neurological disorders and brain conditions.",
    color: "bg-primary/10 text-primary",
  },
  {
    Icon: BoneIcon,
    name: "Orthopedics",
    description: "Joint replacements, trauma care, and sports medicine expertise.",
    color: "bg-primary/10 text-primary",
  },
  {
    Icon: BabyIcon,
    name: "OBG & Gynaecology",
    description: "Complete women's health services from adolescence through menopause.",
    color: "bg-accent text-primary",
  },
  {
    Icon: DropletIcon,
    name: "Urology",
    description: "Advanced urological treatments and minimally invasive procedures.",
    color: "bg-primary/10 text-primary",
  },
  {
    Icon: StethoscopeIcon,
    name: "General Medicine",
    description: "Comprehensive primary care and preventive health services.",
    color: "bg-primary/10 text-primary",
  },
  {
    Icon: MicroscopeIcon,
    name: "Medical Gastroenterology",
    description: "Digestive health expertise with advanced endoscopic procedures.",
    color: "bg-primary/10 text-primary",
  },
  {
    Icon: ScissorsIcon,
    name: "General & Laparoscopic Surgery",
    description: "Minimally invasive surgical procedures for faster recovery.",
    color: "bg-primary/10 text-primary",
  },
  {
    Icon: LungsIcon,
    name: "Pulmonology",
    description: "Respiratory care and treatment for lung conditions.",
    color: "bg-primary/10 text-primary",
  },
  {
    Icon: HeartBeatIcon,
    name: "Vascular Surgery",
    description: "Expert treatment for blood vessel disorders and conditions.",
    color: "bg-primary/10 text-primary",
  },
  {
    Icon: PillIcon,
    name: "Surgical Oncology",
    description: "Comprehensive cancer surgery with multidisciplinary approach.",
    color: "bg-primary/10 text-primary",
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="section-padding gradient-purple-light">
      <div className="container-hospital">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Centres of Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Multi-Specialty Care
          </h2>
          <p className="text-lg text-muted-foreground">
            Our specialized departments are equipped with cutting-edge technology and staffed by experienced specialists dedicated to providing exceptional patient care.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <a
              href="#doctors"
              key={index}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${specialty.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <specialty.Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {specialty.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#doctors">
            <Button variant="default" size="lg" className="group">
              <span className="transition-transform group-hover:translate-x-1">Find a Doctor by Specialty</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Specialties;