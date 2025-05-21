
import { Link } from 'react-router-dom';

// Safety tips data
const safetyTips = [
  {
    id: 1,
    title: "Know Your Fire Extinguisher Types",
    excerpt: "Different fires require different extinguisher types. Learn which type is suitable for various fire scenarios.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=300",
    link: "/safety-tips/extinguisher-types"
  },
  {
    id: 2,
    title: "Develop an Evacuation Plan",
    excerpt: "Every workplace and home should have a clear evacuation plan that everyone understands.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=300",
    link: "/safety-tips/evacuation-plans"
  },
  {
    id: 3,
    title: "Fire Safety in Commercial Kitchens",
    excerpt: "Special considerations for commercial kitchen environments to prevent grease fires.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=300",
    link: "/safety-tips/kitchen-safety"
  }
];

const SafetyTips = () => {
  return (
    <section className="py-16 bg-safex-cream">
      <div className="container-custom">
        <h2 className="section-heading text-center">
          Fire <span className="text-safex-red">Safety Tips</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Stay informed with the latest fire safety guidelines and best practices from our experts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safetyTips.map((tip) => (
            <article key={tip.id} className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
              <div className="h-40 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3 text-safex-navy">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tip.excerpt}
                </p>
                <Link 
                  to={tip.link}
                  className="text-safex-red font-medium hover:underline inline-flex items-center"
                >
                  Read More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/safety-tips" className="btn-primary">
            Explore All Safety Tips
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
