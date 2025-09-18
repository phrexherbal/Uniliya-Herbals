
import React, { useState, useCallback } from 'react';
import { Page } from './types';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import WorkWithUs from './pages/WorkWithUs';
import Downloads from './pages/Downloads';
import ContactUs from './pages/ContactUs';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home navigateTo={navigateTo} />;
      case Page.About:
        return <About />;
      case Page.Products:
        return <Products />;
      case Page.WorkWithUs:
        return <WorkWithUs />;
      case Page.Downloads:
        return <Downloads />;
      case Page.ContactUs:
        return <ContactUs />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header onMenuClick={toggleMenu} onLogoClick={() => navigateTo(Page.Home)} />
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} navigateTo={navigateTo} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
