
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-safex-red">
              <span className="text-safex-navy">Alankrita</span> Fire Service
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-safex-navy hover:text-safex-red font-medium transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-safex-navy hover:text-safex-red font-medium transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-safex-navy hover:text-safex-red font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-safex-navy hover:text-safex-red font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-safex-navy focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16m-7 6h7" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-2 animate-fade-in">
            <Link 
              to="/"
              className="block py-2 px-4 text-safex-navy hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products"
              className="block py-2 px-4 text-safex-navy hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about"
              className="block py-2 px-4 text-safex-navy hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="block py-2 px-4 text-safex-navy hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
