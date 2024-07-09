
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleToggle = () => {
      setNavOpen(!navOpen);
    };
  return (
    <div>
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">FitnessFactory</div>
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-800 focus:outline-none"
            >
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul
            className={`md:flex md:items-center md:space-x-6 ${
              navOpen ? 'block' : 'hidden'
            }`}
          >
            <li>
              <a
                href="/"
                className="block py-2 text-gray-800 hover:text-blue-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="block py-2 text-gray-800 hover:text-blue-600"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block py-2 text-gray-800 hover:text-blue-600"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block py-2 text-gray-800 hover:text-blue-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;