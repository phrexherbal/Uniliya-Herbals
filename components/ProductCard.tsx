
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onMoreClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onMoreClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row items-center transform hover:scale-105 transition-transform duration-300">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full sm:w-48 h-48 object-cover"
      />
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600">
          <strong>Packing Size:</strong> {product.packingSize}
        </p>
        <p className="text-gray-800 font-semibold text-lg mt-2">
          <strong>MRP:</strong> {product.mrp}
        </p>
        <div className="mt-4">
          <button
            onClick={() => onMoreClick(product)}
            className="w-full sm:w-auto bg-amber-500 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-600 transition-colors duration-300"
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
