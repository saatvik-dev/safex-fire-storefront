
import { Link } from 'react-router-dom';

// Featured category data
const categories = [
  {
    id: 'fire-extinguishers',
    title: 'Fire Extinguishers',
    description: 'ABC, CO₂, Clean Agent & specialized extinguishers for different fire types.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400',
    link: '/products/fire-extinguishers'
  },
  {
    id: 'fire-alarms',
    title: 'Fire Alarm Systems',
    description: 'Early detection systems including smoke, heat, and multi-sensors.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=400',
    link: '/products/fire-alarms'
  },
  {
    id: 'suppression-systems',
    title: 'Suppression Systems',
    description: 'FM200, sprinklers, and specialized systems for various environments.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=400',
    link: '/products/suppression-systems'
  },
  {
    id: 'safety-accessories',
    title: 'Safety Accessories',
    description: 'Fire blankets, safety signs, emergency lighting and evacuation equipment.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=400',
    link: '/products/safety-accessories'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading text-center">
          Our Fire Safety <span className="text-safex-red">Solutions</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Comprehensive fire protection solutions designed to keep your property, assets, 
          and people safe from fire hazards.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              to={category.link} 
              key={category.id}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-heading font-bold text-xl">
                  {category.title}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-safex-red font-medium">
                  <span>View Products</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
