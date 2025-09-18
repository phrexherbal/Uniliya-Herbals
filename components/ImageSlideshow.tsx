
import React, { useState, useEffect, useCallback } from 'react';
import { Product } from '../types';

interface ImageSlideshowProps {
  products: Product[];
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const featuredProducts = products.slice(0, 5);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  }, [featuredProducts.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredProducts.length) % featuredProducts.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  }

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl group">
      <div className="relative h-full w-full">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <h3 className="text-white text-2xl md:text-3xl font-bold">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
      
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full text-white hover:bg-white/50 transition opacity-0 group-hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 p-2 rounded-full text-white hover:bg-white/50 transition opacity-0 group-hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {featuredProducts.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'} transition`}></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
