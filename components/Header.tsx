
import React from 'react';
import { LOGO_URL } from '../constants';

interface HeaderProps {
  onMenuClick: () => void;
  onLogoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onLogoClick }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <button onClick={onLogoClick} className="focus:outline-none">
            <img src={LOGO_URL} alt="Uniliya Herbals Logo" className="h-16 w-16 object-contain" />
        </button>
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md text-gray-700 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
