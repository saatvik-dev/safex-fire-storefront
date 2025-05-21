
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-safex-navy text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Safex Fire Services Ltd</h3>
            <p className="text-gray-300 mb-4">
              Guardians Against Fire Hazards for over 50 years. India's trusted fire protection brand.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-safex-red">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-safex-red">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-safex-red">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-safex-red">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/safety-tips" className="text-gray-300 hover:text-white transition-colors">Safety Tips</Link>
              </li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/fire-extinguishers" className="text-gray-300 hover:text-white transition-colors">Fire Extinguishers</Link>
              </li>
              <li>
                <Link to="/products/fire-alarms" className="text-gray-300 hover:text-white transition-colors">Fire Alarm Systems</Link>
              </li>
              <li>
                <Link to="/products/suppression-systems" className="text-gray-300 hover:text-white transition-colors">Fire Suppression</Link>
              </li>
              <li>
                <Link to="/products/safety-accessories" className="text-gray-300 hover:text-white transition-colors">Safety Accessories</Link>
              </li>
              <li>
                <Link to="/products/automotive-systems" className="text-gray-300 hover:text-white transition-colors">Automotive Systems</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              1234 Industrial Area, Phase 2
              <br />
              New Delhi, India 110001
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Phone:</span> +91 1234567890
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Email:</span> info@safexfire.com
            </p>
            <Link 
              to="/contact" 
              className="bg-safex-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Safex Fire Services Limited. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
