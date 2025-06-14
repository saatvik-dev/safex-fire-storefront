
import { useState } from 'react';
import MainLayout from '../components/Layout/MainLayout';
import ProductCard from '../components/Products/ProductCard';
import CategoryFilter from '../components/Products/CategoryFilter';

// Sample product data
const products = [
  {
    id: 'fe-001',
    name: 'ABC Dry Powder Fire Extinguisher - 4kg',
    description: 'Multipurpose fire extinguisher suitable for Class A, B, and C fires. Ideal for homes, offices, and vehicles.',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    category: 'Fire Extinguishers',
    bestseller: true
  },
  {
    id: 'fe-002',
    name: 'CO₂ Fire Extinguisher - 2kg',
    description: 'Specialized for electrical fires and flammable liquids. Leaves no residue after discharge.',
    price: 2799,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200',
    category: 'Fire Extinguishers'
  },
  {
    id: 'fe-003',
    name: 'Clean Agent Fire Extinguisher - 6kg',
    description: 'Environmentally friendly clean agent that leaves no residue. Ideal for server rooms and sensitive equipment.',
    price: 5499,
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200',
    category: 'Fire Extinguishers'
  },
  {
    id: 'fa-001',
    name: 'Addressable Fire Alarm Control Panel',
    description: 'Sophisticated control panel for managing and monitoring fire detection systems across large buildings.',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    category: 'Fire Alarms'
  },
  {
    id: 'fa-002',
    name: 'Smoke Detector - Photoelectric',
    description: 'Early warning smoke detection system with high sensitivity to smoldering fires.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=1200',
    category: 'Fire Alarms',
    bestseller: true
  },
  {
    id: 'fs-001',
    name: 'FM200 Fire Suppression System - Small Office',
    description: 'Clean agent fire suppression system designed for small server rooms and offices.',
    price: 35999,
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200',
    category: 'Suppression Systems'
  },
  {
    id: 'acc-001',
    name: 'Fire Blanket - 1.2m x 1.2m',
    description: 'Quick deployment fire blanket for smothering small fires in kitchens or workshops.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1200',
    category: 'Safety Accessories'
  },
  {
    id: 'auto-001',
    name: 'Automatic Fire Extinguisher for Cars',
    description: 'Self-activating fire extinguisher designed for engine compartments in vehicles.',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1200',
    category: 'Automotive Systems'
  },
];

// Extract unique categories
const categories = [...new Set(products.map(product => product.category))];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter products based on category
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="bg-safex-navy text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Fire Safety Products
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Browse our comprehensive range of fire safety equipment designed to protect
            your home, office, or industrial facility from fire hazards.
          </p>
        </div>
      </div>
      
      {/* Products Section */}
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="w-full md:w-64 flex-shrink-0">
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          
          {/* Products grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-medium text-safex-navy">
                {selectedCategory === 'all' ? 'All Products' : selectedCategory}
                <span className="text-gray-500 ml-2">({filteredProducts.length} products)</span>
              </h2>
              
              <div className="text-sm text-gray-500">
                Showing all {filteredProducts.length} results
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id}>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-lg font-medium text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500">
                  Try changing your search criteria or browse all products.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                  }}
                  className="mt-4 text-safex-red font-medium hover:underline"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductsPage;
