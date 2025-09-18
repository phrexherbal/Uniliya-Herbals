
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [mainImage, setMainImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);
  
  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
          aria-label="Close product details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <div className="mb-4">
              <img src={mainImage} alt={product.name} className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md" />
            </div>
            <div className="flex space-x-2 justify-center">
              {product.images.map((img, index) => (
                <button key={index} onClick={() => setMainImage(img)} className={`w-20 h-20 rounded-md overflow-hidden border-2 ${mainImage === img ? 'border-amber-500' : 'border-transparent'} hover:border-amber-400`}>
                  <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="space-y-2 mb-6">
              <p><strong className="font-semibold text-gray-800">Packing Size:</strong> {product.packingSize}</p>
              <p className="text-2xl font-bold text-amber-600"><strong className="font-semibold text-gray-800">MRP:</strong> {product.mrp}</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.654 4.39 1.873 6.161l-1.01 3.687 3.822-1.009z" /></svg>
              <span>Buy Now on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
