
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-safex-navy text-white">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=1200")' 
        }}
      ></div>
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
            <span className="text-safex-red">Guardians</span> Against Fire Hazards
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            India's trusted fire protection brand with over 50 years of experience keeping homes and businesses safe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/products" 
              className="btn-primary"
            >
              Explore Products
            </Link>
            <Link 
              to="/contact" 
              className="btn-outline"
            >
              Request Consultation
            </Link>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-700 flex items-center">
            <div className="flex -space-x-2 mr-4">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Customer" 
                className="h-10 w-10 rounded-full border-2 border-safex-red object-cover"
              />
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Customer" 
                className="h-10 w-10 rounded-full border-2 border-safex-red object-cover"
              />
              <img 
                src="https://randomuser.me/api/portraits/men/86.jpg" 
                alt="Customer" 
                className="h-10 w-10 rounded-full border-2 border-safex-red object-cover"
              />
            </div>
            <p className="text-sm text-gray-300">
              <span className="text-white font-medium">2,500+ clients</span> trust our safety solutions
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
