
import React from 'react';
import { DOWNLOAD_LINKS } from '../constants';

const DownloadCard: React.FC<{ title: string; description: string; link: string; icon: JSX.Element }> = ({ title, description, link, icon }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300">
        <div className="flex items-center space-x-4">
            <div className="bg-amber-100 text-amber-600 p-4 rounded-full">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    </a>
);

const Downloads: React.FC = () => {
  const downloadItems = [
    {
      title: 'All Product Images',
      description: 'Download high-resolution images of our products.',
      link: DOWNLOAD_LINKS.images,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    },
    {
      title: 'Distributorship Form',
      description: 'Get the application form to partner with us.',
      link: DOWNLOAD_LINKS.form,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    },
    {
      title: 'Product Catalogue',
      description: 'Browse our complete product catalogue in PDF format.',
      link: DOWNLOAD_LINKS.catalogue,
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800">Downloads</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
        Access all our resources here. Click on any item to start the download. All links open in a new tab.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {downloadItems.map(item => <DownloadCard key={item.title} {...item} />)}
      </div>
    </div>
  );
};

export default Downloads;
