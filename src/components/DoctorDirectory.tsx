import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Phone, Filter } from "lucide-react";

const doctors = [
  {
    name: "Dr. Vasanth Rao",
    specialty: "Urology",
    qualification: "MBBS, MS, MCh",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Krishna Reddy",
    specialty: "Anesthesiology",
    qualification: "MBBS, DA",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Nishan Reddy",
    specialty: "Vascular Surgery",
    qualification: "MBBS, MS, MCh",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Venugopal",
    specialty: "Trauma & Critical Care",
    qualification: "MBBS, MS, FICS",
    experience: "20+ years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Shivanand Reddy",
    specialty: "Medical Gastroenterology",
    qualification: "MBBS, MD, DM",
    experience: "14+ years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Srilatha",
    specialty: "OBG & Gynaecology",
    qualification: "MBBS, MS, DNB",
    experience: "16+ years",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Pranay Palli",
    specialty: "Cardiology",
    qualification: "MBBS, MD, DM",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Raghu",
    specialty: "Neurology",
    qualification: "MBBS, MD, DM",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Prabhaker",
    specialty: "Orthopedics",
    qualification: "MBBS, MS",
    experience: "22+ years",
    image: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=300&h=300&fit=crop&crop=face",
  },
];

const specialtyFilters = [
  "All",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "OBG & Gynaecology",
  "Urology",
  "Trauma & Critical Care",
  "Medical Gastroenterology",
  "Vascular Surgery",
  "Anesthesiology",
];

const DoctorDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <section id="doctors" className="section-padding bg-background">
      <div className="container-hospital">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Medical Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team of highly qualified specialists brings decades of combined experience to provide you with exceptional healthcare.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-card rounded-2xl shadow-card p-6 mb-10 border border-border/50">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by doctor name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
            </div>

            {/* Specialty Filter */}
            <div className="flex flex-wrap gap-2">
              {specialtyFilters.slice(0, 5).map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedSpecialty === specialty
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {specialty}
                </button>
              ))}
              <div className="relative group">
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  More
                </button>
                <div className="absolute top-full right-0 mt-2 bg-card rounded-lg shadow-lg border border-border p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 min-w-[200px]">
                  {specialtyFilters.slice(5).map((specialty) => (
                    <button
                      key={specialty}
                      onClick={() => setSelectedSpecialty(specialty)}
                      className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedSpecialty === specialty
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-accent"
                      }`}
                    >
                      {specialty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {doctor.specialty}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {doctor.qualification}
                </p>
                <p className="text-sm text-primary font-medium mb-4">
                  {doctor.experience} Experience
                </p>
                <div className="flex gap-2">
                  <a href="#appointment" className="flex-1">
                    <Button variant="default" size="sm" className="w-full">
                      <Calendar className="h-4 w-4" />
                      Book
                    </Button>
                  </a>
                  <a href="tel:+919876543210">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No doctors found matching your criteria. Please try a different search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDirectory;
