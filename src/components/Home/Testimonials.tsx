
// Testimonial data
const testimonials = [
  {
    id: 1,
    content: "Safex Fire's equipment and service have been instrumental in keeping our manufacturing plant secure. Their team provided expert guidance on the right fire safety solutions for our specific needs.",
    author: "Rajesh Kumar",
    position: "Operations Director",
    company: "Tata Steel Ltd",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 2,
    content: "We've relied on Safex for over 15 years for all our hospitality properties. Their responsive service and quality products give us peace of mind knowing our guests and staff are protected.",
    author: "Priya Sharma",
    position: "Facilities Manager",
    company: "Taj Hotels Group",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 3,
    content: "When we needed to upgrade our fire safety systems across 12 office locations, Safex delivered a comprehensive solution on time and within budget. Highly recommended for enterprise solutions.",
    author: "Vikram Mehta",
    position: "Safety Compliance Officer",
    company: "Reliance Industries",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-heading text-center">
          Trusted by <span className="text-safex-red">Industry Leaders</span>
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our clients include some of India's most prestigious companies and organizations who rely on Safex for their fire safety needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-safex-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg className="h-5 w-5 text-safex-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg className="h-5 w-5 text-safex-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg className="h-5 w-5 text-safex-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg className="h-5 w-5 text-safex-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
              </div>
              <blockquote className="mb-6 text-gray-700">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-medium text-safex-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-center text-xl font-medium mb-8">
            Trusted by companies across industries
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 font-bold text-xl">TATA GROUP</div>
            <div className="text-gray-400 font-bold text-xl">RELIANCE</div>
            <div className="text-gray-400 font-bold text-xl">MAHINDRA</div>
            <div className="text-gray-400 font-bold text-xl">AIRTEL</div>
            <div className="text-gray-400 font-bold text-xl">INDIAN RAILWAYS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
