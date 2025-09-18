
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleMoreClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">Our Products</h1>
      <div className="space-y-8">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} onMoreClick={handleMoreClick} />
        ))}
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
    </div>
  );
};

export default Products;
