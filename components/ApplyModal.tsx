
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

interface ApplyModalProps {
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateMailtoLink = () => {
        const subject = encodeURIComponent('Distributorship Application');
        const body = encodeURIComponent(
`New Distributorship Application:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
State: ${formData.state}

Message:
${formData.message}
`
        );
        return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative animate-fade-in-up">
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Distributorship Application</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Close form">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
          <p className="text-gray-600 mb-6">
            Fill out the form below to apply. Clicking "Submit Application" will open your default email client to send the details to us.
          </p>
          <form action={generateMailtoLink()} method="POST" encType="text/plain">
            <div className="grid grid-cols-1 gap-4">
              <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} value={formData.name} />
              <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} value={formData.email} />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} value={formData.phone} />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="city" placeholder="City" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} value={formData.city} />
                <input type="text" name="state" placeholder="State" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} value={formData.state} />
              </div>
              <textarea name="message" placeholder="Your Message (Optional)" rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent" onChange={handleChange} value={formData.message}></textarea>
              <button type="submit" className="w-full bg-amber-500 text-white font-bold py-3 px-4 rounded-md hover:bg-amber-600 transition-colors duration-300">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
