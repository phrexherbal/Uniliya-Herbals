
import React from 'react';
import { Page } from '../types';
import { COMPANY_INFO, MENU_ITEMS } from '../constants';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div className="md:w-1/2 space-y-2">
            <h3 className="text-xl font-bold text-amber-400">Uniliya Herbals</h3>
            <p className="text-gray-300">{COMPANY_INFO.address}</p>
            <p className="text-gray-300">
              Contact: <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-400">{COMPANY_INFO.phone}</a>
            </p>
          </div>
          <div className="md:w-1/2 md:text-right">
            <h4 className="font-semibold mb-2 text-lg text-amber-400">Quick Links</h4>
            <ul className="space-y-1">
              {MENU_ITEMS.map(item => (
                <li key={item}>
                  <button onClick={() => navigateTo(item)} className="text-gray-300 hover:text-amber-400 transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Uniliya Herbals. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
