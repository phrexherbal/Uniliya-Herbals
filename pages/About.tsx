import React from 'react';
import { LOGO_URL } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">About Uniliya Herbals</h1>
      <div className="text-center mb-8">
        <img src={LOGO_URL} alt="Uniliya Herbals Logo" className="h-32 w-32 mx-auto object-contain mb-4"/>
      </div>
      <div className="text-gray-700 text-lg space-y-4 leading-relaxed">
        <p>
          Welcome to Uniliya Herbals, where ancient wisdom meets modern wellness. We are dedicated to providing high-quality, natural herbal remedies that promote a healthy and balanced lifestyle. Our products are crafted with the purest ingredients, sourced ethically and processed with utmost care to retain their natural potency.
        </p>
        <p>
          Our mission is to bring the healing power of nature into every home. We believe in holistic well-being, and our range of products is designed to address various health needs, from boosting immunity to enhancing beauty, naturally.
        </p>
      </div>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">From the Director's Desk</h2>
        <div className="flex flex-col sm:flex-row items-center bg-gray-50 p-6 rounded-lg">
          <img src="https://i.imgur.com/tL8z9pL.png" alt="Director Kamran Azeem" className="w-40 h-40 rounded-lg object-cover object-center shadow-md mb-4 sm:mb-0 sm:mr-6" />
          <div>
            <h3 className="text-2xl font-semibold text-amber-600">Kamran Azeem</h3>
            <p className="text-gray-700 mt-2">
              "At Uniliya Herbals, our vision is to be a trusted name in natural healthcare. We are committed to authenticity, quality, and customer satisfaction. It is my privilege to lead a team that is passionate about creating products that make a real difference in people's lives. We invite you to join us on this journey towards a healthier tomorrow."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;