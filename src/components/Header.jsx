import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../img/other/logo.png';
import allProducts from '../data/ProductsData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [noMatch, setNoMatch] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef();

  const isActive = (path) => location.pathname === path;
  const normalize = (str) => str.toLowerCase().replace(/\s|-/g, '').replace(/s$/, '');

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMenuOpen]);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length >= 1) {
      const lowerQuery = normalize(query);
      const allNames = [
        ...new Set([
          ...allProducts.map((p) => p.category),
          ...allProducts.map((p) => p.name),
        ]),
      ];

      const matches = allNames.filter((name) =>
        normalize(name).includes(lowerQuery)
      );

      setSuggestions(matches);

      if (matches.length === 0) {
        setNoMatch(true);
        setTimeout(() => setNoMatch(false), 2500);
      } else {
        setNoMatch(false);
      }
    } else {
      setSuggestions([]);
      setNoMatch(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = normalize(searchQuery);

    const categories = [...new Set(allProducts.map((p) => p.category))];
    const matchedCategory = categories.find((cat) => normalize(cat) === query);
    if (matchedCategory) {
      setSuggestions([]);
      setSearchQuery('');
      navigate(`/category/${matchedCategory}`);
      return;
    }

    const matchedProduct = allProducts.find((p) => normalize(p.name) === query);
    if (matchedProduct) {
      setSuggestions([]);
      setSearchQuery('');
      navigate(`/product/${matchedProduct.id}`);
      return;
    }

    setSuggestions([]);
    setNoMatch(true);
    setTimeout(() => setNoMatch(false), 2500);
  };

  const handleSuggestionClick = (name) => {
    const normName = normalize(name);
    const category = allProducts.find((p) => normalize(p.category) === normName);
    const product = allProducts.find((p) => normalize(p.name) === normName);

    setSearchQuery('');
    setSuggestions([]);
    setIsMenuOpen(false);

    if (category) {
      navigate(`/category/${category.category}`);
    } else if (product) {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 -ml-2 relative">
          {/* Logo Section */}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="flex items-center h-10 gap-1 sm:h-12 sm:gap-2 sm:ml-2 xl:h- xl:gap-3 xl:-mt-1 xl:-ml-2 min-[1024px]:max-[1360px]:gap-1">
              <img
                src={logo}
                alt="Steel Galaxy Logo"
                className="h-12 w-auto object-contain sm:h-10 xl:h-20 min-[1024px]:max-[1360px]:h-10"
              />
              <div className="leading-none flex flex-col justify-center">
                <p className="text-[25px] font-black text-blue-950 whitespace-nowrap sm:text-xl xl:text-[35px] min-[1024px]:max-[1360px]:text-lg">
                  STEEL GALAXY
                </p>
                <div className="h-[2px] bg-blue-950 w-full my-[1px] sm:h-[3px]" />
                <p className="text-[10px] text-slate-700 font-bold whitespace-nowrap sm:text-[12px] xl:text-[14px] xl:font-extrabold xl:ml-16 ml-14 sm:ml-10 min-[1024px]:max-[1360px]:ml-10">
                  Your World of fasteners
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-11 min-[1024px]:max-[1360px]:space-x-6">
            {['/', '/about', '/products', '/contact'].map((path, index) => (
              <Link
                key={index}
                to={path}
                className="relative group font-medium text-slate-700 transition-all duration-300 ease-in-out hover:-translate-y-1"
              >
                <span className="block capitalize">
                  {path === '/' ? 'Home' : path.slice(1)}
                </span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Searchbar */}
          <form
            onSubmit={handleSearch}
            className="hidden lg:block relative w-64 min-[1024px]:max-[1360px]:w-44"
          >
            <div className="flex rounded-3xl overflow-hidden border border-blue-300">
              <input
                type="text"
                placeholder="Search products..."
                className="px-4 py-1.5 w-full focus:outline-none"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5"
              >
                <Search size={18} />
              </button>
            </div>

            {(suggestions.length > 0 || noMatch) && (
              <div className="absolute z-50 bg-white border border-gray-200 rounded mt-1 w-full shadow">
                {suggestions.length > 0 ? (
                  <ul className="max-h-40 overflow-y-auto">
                    {suggestions.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-1 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSuggestionClick(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500 px-4 py-2">
                    No matching product or category found.
                  </p>
                )}
              </div>
            )}
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Navigation */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-64 bg-slate-100 z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden shadow-lg`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-700 hover:text-red-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Searchbar */}
          <div className="px-4 pb-2">
            <form onSubmit={handleSearch}>
              <div className="flex rounded-3xl overflow-hidden border border-blue-300">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="px-3 py-2 text-sm w-full focus:outline-none"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 rounded-r-3xl text-white px-4"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>

            {(suggestions.length > 0 || noMatch) && (
              <div className="bg-white border border-gray-200 rounded mt-1 shadow max-h-40 overflow-y-auto">
                {suggestions.length > 0 ? (
                  <ul>
                    {suggestions.map((item, index) => (
                      <li
                        key={index}
                        className="px-3 py-1 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSuggestionClick(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500 px-3 py-2">
                    No matching product or category found.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-2 px-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/products', label: 'Products' },
              { path: '/contact', label: 'Contact' },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 mt-4 rounded-3xl transition duration-200 ${
                  isActive(link.path)
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
