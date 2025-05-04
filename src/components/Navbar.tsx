
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <h1 className={`font-bold text-2xl ${isScrolled ? 'text-gym-navy' : 'text-white'}`}>
            OLYMPIAN<span className="text-gym-red">FIT</span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className={`font-medium hover:text-gym-red transition-colors ${isScrolled ? 'text-gym-navy' : 'text-white'}`}>
            Home
          </a>
          <a href="#about" className={`font-medium hover:text-gym-red transition-colors ${isScrolled ? 'text-gym-navy' : 'text-white'}`}>
            About
          </a>
          <a href="#services" className={`font-medium hover:text-gym-red transition-colors ${isScrolled ? 'text-gym-navy' : 'text-white'}`}>
            Services
          </a>
          <a href="#trainers" className={`font-medium hover:text-gym-red transition-colors ${isScrolled ? 'text-gym-navy' : 'text-white'}`}>
            Trainers
          </a>
          <a href="#pricing" className={`font-medium hover:text-gym-red transition-colors ${isScrolled ? 'text-gym-navy' : 'text-white'}`}>
            Pricing
          </a>
          <a href="#contact" className={`font-medium hover:text-gym-red transition-colors ${isScrolled ? 'text-gym-navy' : 'text-white'}`}>
            Contact
          </a>
          <Button className="bg-gym-red hover:bg-gym-navy text-white ml-4">Join Now</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu className={isScrolled ? 'text-gym-navy' : 'text-white'} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="font-medium text-gym-navy hover:text-gym-red py-2">Home</a>
            <a href="#about" className="font-medium text-gym-navy hover:text-gym-red py-2">About</a>
            <a href="#services" className="font-medium text-gym-navy hover:text-gym-red py-2">Services</a>
            <a href="#trainers" className="font-medium text-gym-navy hover:text-gym-red py-2">Trainers</a>
            <a href="#pricing" className="font-medium text-gym-navy hover:text-gym-red py-2">Pricing</a>
            <a href="#contact" className="font-medium text-gym-navy hover:text-gym-red py-2">Contact</a>
            <Button className="bg-gym-red hover:bg-gym-navy text-white w-full mt-2">Join Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
