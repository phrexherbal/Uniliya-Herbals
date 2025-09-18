
import React from 'react';
import { Page } from '../types';
import { MENU_ITEMS } from '../constants';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigateTo: (page: Page) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, navigateTo }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-700 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            {MENU_ITEMS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => navigateTo(item)}
                  className="w-full text-left px-6 py-3 text-lg text-gray-800 hover:bg-amber-500 hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
