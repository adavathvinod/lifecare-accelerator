import { Button } from "@/components/ui/button";
import { Calendar, Phone, AlertCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Emergency Button */}
      <a href="tel:108" className="group">
        <Button
          variant="emergency"
          size="lg"
          className="shadow-emergency rounded-full h-14 px-6 gap-3"
        >
          <AlertCircle className="h-5 w-5" />
          <span className="hidden sm:inline">24/7 Emergency</span>
        </Button>
      </a>

      {/* Book Appointment Button */}
      <a href="#appointment">
        <Button
          variant="default"
          size="lg"
          className="shadow-card rounded-full h-14 px-6 gap-3 hover:shadow-card-hover"
        >
          <Calendar className="h-5 w-5" />
          <span className="hidden sm:inline">Book Appointment</span>
        </Button>
      </a>

      {/* Call Button (Mobile Only) */}
      <a href="tel:+919876543210" className="sm:hidden">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-14 w-14 shadow-card bg-background"
        >
          <Phone className="h-5 w-5" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingCTA;
