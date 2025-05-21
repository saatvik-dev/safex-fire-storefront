
import MainLayout from '../components/Layout/MainLayout';

const AboutPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-safex-navy text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            About Alankrita Fire Service
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Over 50 years of excellence in fire safety and protection solutions across India.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-heading mb-6">
                Our <span className="text-safex-red">Story</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 1970 by fire safety expert and engineer Mr. Rajesh Sharma, Alankrita Fire Service began as a small workshop producing fire extinguishers in Mumbai. With a vision to create a safer India, Mr. Sharma focused on quality, reliability, and innovative fire safety solutions.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, Alankrita has grown from its humble beginnings to become one of India's most trusted and respected fire safety equipment manufacturers and service providers, with operations spanning across the country.
              </p>
              <p className="text-gray-600">
                Today, led by the second generation of the Sharma family, Alankrita continues its tradition of excellence while embracing modern technology and international safety standards to provide comprehensive fire protection solutions.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200" 
                alt="Alankrita History"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-safex-cream">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-heading">
              Our <span className="text-safex-red">Mission</span>
            </h2>
            <p className="text-xl text-gray-600">
              "To protect lives and property through innovative fire safety solutions, 
              excellent service, and unwavering commitment to quality."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-safex-red" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-safex-navy">Protection</h3>
              <p className="text-gray-600">
                We are committed to creating safer environments through top-quality fire protection equipment and solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-safex-red" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-safex-navy">Innovation</h3>
              <p className="text-gray-600">
                We continuously research and develop advanced fire safety technologies to meet evolving challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-safex-red" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-safex-navy">Excellence</h3>
              <p className="text-gray-600">
                We hold ourselves to the highest standards in product quality, customer service, and business ethics.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12">
            Our <span className="text-safex-red">Leadership</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-safex-navy">Vikram Sharma</h3>
              <p className="text-safex-red font-medium">Chief Executive Officer</p>
              <p className="text-gray-600 mt-2">
                Leading Alankrita's strategic vision and growth since 2005.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-safex-navy">Priya Sharma</h3>
              <p className="text-safex-red font-medium">Chief Operations Officer</p>
              <p className="text-gray-600 mt-2">
                Oversees all manufacturing and service operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/86.jpg" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-safex-navy">Rahul Mehta</h3>
              <p className="text-safex-red font-medium">Chief Technology Officer</p>
              <p className="text-gray-600 mt-2">
                Leads product innovation and R&D initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-safex-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-safex-red mb-2">50+</div>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-safex-red mb-2">2,500+</div>
              <p className="text-lg">Clients Nationwide</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-safex-red mb-2">200+</div>
              <p className="text-lg">Team Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-safex-red mb-2">15+</div>
              <p className="text-lg">Service Centers</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
