
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/79fe748d-f698-4f11-aef6-cdcf54685ca8.png"
                alt="Uplaud Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-2xl font-bold text-uplaud-purple">Uplaud</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-uplaud-purple transition-colors">
              Features
            </a>
            <a href="#for-customers" className="text-gray-700 hover:text-uplaud-purple transition-colors">
              For Customers
            </a>
            <a href="#for-businesses" className="text-gray-700 hover:text-uplaud-purple transition-colors">
              For Businesses
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-uplaud-purple transition-colors">
              How It Works
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-uplaud-purple text-uplaud-purple hover:bg-uplaud-purple/10">
              Log In
            </Button>
            <Button className="bg-uplaud-purple hover:bg-uplaud-dark-purple text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-uplaud-purple focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg mt-2 py-2 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-uplaud-purple py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#for-customers" 
                className="text-gray-700 hover:text-uplaud-purple py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Customers
              </a>
              <a 
                href="#for-businesses" 
                className="text-gray-700 hover:text-uplaud-purple py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Businesses
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-uplaud-purple py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="outline" className="border-uplaud-purple text-uplaud-purple hover:bg-uplaud-purple/10 w-full">
                  Log In
                </Button>
                <Button className="bg-uplaud-purple hover:bg-uplaud-dark-purple text-white w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
