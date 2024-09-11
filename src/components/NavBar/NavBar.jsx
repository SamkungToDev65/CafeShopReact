import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-10 p-4 transition-colors duration-300 ${scrolled ? 'bg-[#2b2220e8]' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center text-white">
        <div className="text-3xl">Coffee Logo</div>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Normal Menu (visible on larger screens) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-[#a7a7a7]">home</a></li>
            <li><a href="#" className="hover:text-[#a7a7a7]">service</a></li>
            <li><a href="#" className="hover:text-[#a7a7a7]">gallery</a></li>
          </ul>
        </nav>

        {/* Slide-out Sidebar (visible when hamburger is clicked) */}
        <div className={`fixed top-0 right-0 w-full h-full bg-[#2b2220f5] text-white transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} flex items-center justify-center`}>
          <ul className="text-center space-y-4">
            <li><a href="#" className="block text-2xl hover:text-[#a7a7a7]">home</a></li>
            <li><a href="#" className="block text-2xl hover:text-[#a7a7a7]">service</a></li>
            <li><a href="#" className="block text-2xl hover:text-[#a7a7a7]">gallery</a></li>
            <li>
              <a href="#" onClick={toggleMenu} className="text-center block text-2xl text-[#d9d2d2]">
              <i className="fas fa-xmark text-xl"></i> Close
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
