import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/logo1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Strona główna", href: "#" },
    { name: "O nas", href: "#" },
    { name: "Oferta", href: "#" },
    { name: "Atrakcje", href: "#" },
    { name: "Galeria", href: "#" },
    { name: "Kontakt", href: "#" },
  ];

  return (
    <div className="relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center items-center p-2 sm:p-3">
        <div className="flex flex-col sm:flex-row sm:space-x-4 md:space-x-8 lg:space-x-16 items-center">
          <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">
            Strona główna
          </a>
          <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">
            O nas
          </a>
          <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">
            Oferta
          </a>
          <div className="md:flex items-center space-x-2 py-2 sm:py-0 hidden">
            <img src={logo} alt="Willa Bór Logo" className="h-8 sm:h-10" />
            <p className="text-3xl sm:text-4xl md:text-5xl font-playfair">Willa Bór</p>
          </div>
          <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">
            Atrakcje
          </a>
          <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">
            Galeria
          </a>
          <a href="#" className="text-center text-sm sm:text-base py-1 sm:py-0">
            Kontakt
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Willa Bór Logo" className="h-8 sm:h-10" />
          <p className="text-3xl sm:text-4xl font-playfair">Willa Bór</p>
        </div>
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 pb-10 flex flex-col items-center"
          >
            <div className="w-full flex flex-col items-center space-y-8 mt-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-2xl font-medium text-gray-800 hover:text-amber-600 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <motion.div 
              className="mt-auto pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navLinks.length * 0.1 + 0.3 }}
            >
              <img src={logo} alt="Willa Bór Logo" className="h-16 mx-auto" />
              <p className="text-center text-gray-600 mt-2">Willa Bór</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;