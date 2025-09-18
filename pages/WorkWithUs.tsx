
import React, { useState } from 'react';
import ApplyModal from '../components/ApplyModal';

const WorkWithUs: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Partner With Us</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Join the Uniliya Herbals family and become a part of our growth story. We are looking for passionate partners to help us bring the benefits of herbal wellness to more people.
      </p>

      <div className="bg-amber-50 border-l-4 border-amber-500 text-amber-800 p-6 rounded-r-lg my-10 max-w-2xl mx-auto text-left">
          <h2 className="text-2xl font-bold mb-3">Distributorship Opportunity</h2>
          <p className="mb-4">
              Take the first step towards a rewarding business venture. Our distributorship plan is designed for entrepreneurs who are eager to make an impact in the wellness industry.
          </p>
          <p className="text-2xl font-semibold">
              Get started with an initial investment from just <span className="font-extrabold">₹50,000.00</span>.
          </p>
      </div>

      <button
        onClick={() => setModalOpen(true)}
        className="bg-amber-500 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
      >
        Apply Now
      </button>

      {isModalOpen && <ApplyModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default WorkWithUs;
