
import React from 'react';
import { PRODUCTS } from '../constants';
import { Page, Product } from '../types';
import ImageSlideshow from '../components/ImageSlideshow';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

interface HomeProps {
    navigateTo: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const topProducts = PRODUCTS.slice(0, 3);
  
  return (
    <div className="space-y-12">
      <ImageSlideshow products={PRODUCTS} />
      
      <section>
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Top Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map(product => (
            <ProductCard key={product.id} product={product} onMoreClick={setSelectedProduct} />
          ))}
        </div>
        <div className="text-center mt-8">
            <button 
                onClick={() => navigateTo(Page.Products)}
                className="bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-transform transform hover:scale-105 duration-300"
            >
                View All Products
            </button>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
};

export default Home;
