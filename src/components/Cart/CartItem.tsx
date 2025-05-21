
interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({ id, name, price, quantity, image, onUpdateQuantity, onRemove }: CartItemProps) => {
  return (
    <div className="flex items-center py-4 border-b">
      <div className="h-20 w-20 flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover rounded"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="font-medium text-safex-navy">{name}</h3>
        <p className="text-sm text-gray-500">₹{price.toLocaleString()} per unit</p>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border rounded-md">
          <button 
            className="px-2 py-1 text-gray-600 hover:text-safex-red disabled:opacity-50"
            onClick={() => onUpdateQuantity(id, quantity - 1)}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-2 py-1">{quantity}</span>
          <button 
            className="px-2 py-1 text-gray-600 hover:text-safex-red"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      <div className="ml-4 w-24 text-right font-medium">
        ₹{(price * quantity).toLocaleString()}
      </div>
      
      <button 
        className="ml-4 text-gray-400 hover:text-safex-red"
        onClick={() => onRemove(id)}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
