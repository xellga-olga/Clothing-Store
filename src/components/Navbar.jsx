import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import logo from "../assets/images/logo.png";
import { FaUser, FaBagShopping, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Array of navigation items with titles and paths
  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/clothing-shoes" },
    { title: "Home & Living", path: "/home-living" },
    { title: "Wedding & Party", path: "/wedding-party" },
    { title: "Toys & Entertainment", path: "/toys-entertainment" },
    { title: "Art & Collectibles", path: "/art-collectibles" },
  ];

  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 top-0 absolute right-0 left-0 ">
      {/* Main navigation bar */}
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        {/* Search icon */}
        <MdSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block" />

        {/* Logo image linking to homepage */}
        <a href="/">
          <img src={logo} alt="Logo" width={70} />
        </a>

        {/* Account and shopping cart links */}
        <div className="text-l text-Black sm:flex items-center hidden gap-4">
          <a className="flex items-center gap-2" href="/">
            <FaUser />
            Account
          </a>
          <a className="flex items-center gap-2" href="/">
            <FaBagShopping />
            Shopping
          </a>
        </div>

        {/* navbar for sm devices */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-Black" />
            ) : (
              <FaBars className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </nav>

      {/* Horizontal line separating sections */}
      <hr />

      {/* Navigation items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden">
          {navItems.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-500">
              {/* Link to the path defined in navItems */}
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* only mobile menu items */}
      <div>
         <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? '' : 'hidden'}`}>
            {
               navItems.map(({title, path}) => (
                  <li key={title} className="hover:text-orange-500 cursor-pointer my-3">
                     <Link path='/'>{title}</Link>
                  </li>
               ))
            }
         </ul>
      </div>
    </header>
  );
};

export default Navbar;
