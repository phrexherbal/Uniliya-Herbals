
import React from 'react';
import { COMPANY_INFO } from '../constants';

const ContactInfoCard: React.FC<{ icon: JSX.Element; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
        <div className="flex-shrink-0 bg-amber-100 text-amber-600 p-4 rounded-full">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className="text-gray-600 mt-1">{children}</div>
        </div>
    </div>
);

const ContactUs: React.FC = () => {
    const { address, phone, email, website } = COMPANY_INFO;
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">Get In Touch</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
        We'd love to hear from you! Whether you have a question about our products, partnerships, or anything else, our team is ready to answer all your questions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ContactInfoCard 
            title="Our Address"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
        >
            <p>{address}</p>
        </ContactInfoCard>

        <ContactInfoCard 
            title="Phone Number"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
        >
            <a href={`tel:${phone}`} className="hover:text-amber-600 transition-colors">{phone}</a>
        </ContactInfoCard>

        <ContactInfoCard 
            title="Email Address"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
        >
            <a href={`mailto:${email}`} className="hover:text-amber-600 transition-colors">{email}</a>
        </ContactInfoCard>

        <ContactInfoCard 
            title="Website"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 00-9-9m9-9a9 9 0 00-9 9" /></svg>}
        >
            <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">{website}</a>
        </ContactInfoCard>
      </div>
    </div>
  );
};

export default ContactUs;
