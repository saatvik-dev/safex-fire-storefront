
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  bestseller?: boolean;
}

const ProductCard = ({ id, name, description, image, category, bestseller }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="relative">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover"
          />
        </Link>
        {bestseller && (
          <div className="absolute top-2 right-2 bg-safex-red text-white text-xs font-bold px-2 py-1 rounded">
            Bestseller
          </div>
        )}
      </div>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg text-safex-navy mb-1 hover:text-safex-red transition-colors">
            {name}
          </h3>
        </Link>
        <div className="text-sm text-gray-500 mb-2">{category}</div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
