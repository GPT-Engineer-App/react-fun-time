import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavigationBar = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Aquarium</div>
        <div className="space-x-4">
          <Link to="/" className={cn("hover:underline")}>Home</Link>
          <Link to="/exhibits" className={cn("hover:underline")}>Exhibits</Link>
          <Link to="/tickets" className={cn("hover:underline")}>Tickets</Link>
          <Link to="/contact" className={cn("hover:underline")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;