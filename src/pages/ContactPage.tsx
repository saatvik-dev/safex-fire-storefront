
import MainLayout from '../components/Layout/MainLayout';
import { useState } from 'react';
import { toast } from '../components/ui/use-toast';

// Sample branch locations
const locations = [
  {
    id: 1,
    city: 'New Delhi',
    address: '1234 Industrial Area, Phase 2, New Delhi, 110001',
    phone: '+91 11-12345678',
    email: 'delhi@safexfire.com'
  },
  {
    id: 2,
    city: 'Mumbai',
    address: '567 Andheri East, MIDC, Mumbai, 400093',
    phone: '+91 22-98765432',
    email: 'mumbai@safexfire.com'
  },
  {
    id: 3,
    city: 'Bangalore',
    address: '890 Electronic City, Phase 1, Bangalore, 560100',
    phone: '+91 80-45678901',
    email: 'bangalore@safexfire.com'
  },
  {
    id: 4,
    city: 'Chennai',
    address: '456 Industrial Estate, Ambattur, Chennai, 600058',
    phone: '+91 44-23456789',
    email: 'chennai@safexfire.com'
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you shortly.",
      duration: 5000,
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-safex-navy text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Get in touch with our fire safety experts for consultations, quotes, or any questions
            about our products and services.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="section-subheading text-safex-navy mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safex-red"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safex-red"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safex-red"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safex-red"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Service Request">Service Request</option>
                      <option value="Technical Support">Technical Support</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-safex-red"
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className="bg-safex-red text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="section-subheading text-safex-navy mb-6">
                Corporate Headquarters
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-safex-red rounded-full p-2 mr-4 text-white">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-safex-navy">Address</h3>
                    <p className="text-gray-600">
                      Safex Fire Services Limited<br />
                      1234 Industrial Area, Phase 2<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="bg-safex-red rounded-full p-2 mr-4 text-white">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-safex-navy">Phone</h3>
                    <p className="text-gray-600">
                      +91 11-12345678 (Sales)<br />
                      +91 11-87654321 (Support)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-safex-red rounded-full p-2 mr-4 text-white">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-safex-navy">Email</h3>
                    <p className="text-gray-600">
                      info@safexfire.com<br />
                      support@safexfire.com
                    </p>
                  </div>
                </div>
              </div>
              
              <h2 className="section-subheading text-safex-navy mb-6">
                Business Hours
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-safex-red">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                  24/7 Emergency Technical Support Available
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-safex-navy hover:bg-opacity-90 text-white h-10 w-10 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-safex-navy hover:bg-opacity-90 text-white h-10 w-10 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-safex-navy hover:bg-opacity-90 text-white h-10 w-10 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="bg-safex-navy hover:bg-opacity-90 text-white h-10 w-10 rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Branch Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-12">
            Our <span className="text-safex-red">Branches</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map(location => (
              <div 
                key={location.id}
                className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-safex-red"
              >
                <h3 className="font-heading font-semibold text-xl mb-4 text-safex-navy">
                  {location.city}
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 inline-block mr-2 text-safex-red" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location.address}
                  </p>
                  <p>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 inline-block mr-2 text-safex-red" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {location.phone}
                  </p>
                  <p>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 inline-block mr-2 text-safex-red" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {location.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-heading text-center mb-8">
            Find Us <span className="text-safex-red">On the Map</span>
          </h2>
          
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            {/* Replace with an actual map integration */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 font-medium">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
