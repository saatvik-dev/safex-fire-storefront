
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-safex-navy text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Safeguard Your Space?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Whether you need a comprehensive fire safety solution for your industrial facility 
              or simply want to ensure your home is protected, our experts are here to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="bg-safex-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
              >
                Contact Our Experts
              </Link>
              <a 
                href="tel:+911234567890" 
                className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-safex-navy transition-colors font-medium flex items-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 1234567890
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h3 className="text-safex-navy font-heading font-semibold text-xl mb-4">
              Request a Quick Quote
            </h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safex-red text-gray-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safex-red text-gray-900"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safex-red text-gray-900"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Requirements
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safex-red text-gray-900"
                    placeholder="Brief description of your requirements"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-safex-red text-white py-2 rounded-md hover:bg-red-700 transition-colors font-medium"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
