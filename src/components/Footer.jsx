import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  // footer navigation items
  const footerNavItems = [
    { title: "About Us", path: "/about" },
    { title: "Customer Service", path: "/customer-service" },
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <footer className="bg-Black text-white py-8">
      <div className="max-w-screen-2xl xl:px-28 px-4 mx-auto grid md:grid-cols-3 gap-8">
        {/* fogo section */}
        <div className="mb-6 md:mb-0">
          <Link to="/">
            <img src={logo} alt="logo" width={100} />
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            High-quality products and accessories for your daily life.
          </p>
        </div>

        {/* footer navigation */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {footerNavItems.map(({ title, path }) => (
              <li key={title}>
                <Link to={path} className="hover:text-orange-500">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* social media links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="https://pinterest.com" className="hover:text-orange-500">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-6 border-t border-gray-700" />

      {/* copyright section */}
      <div className="text-center text-sm text-gray-400 mt-4">
        <p>
          &copy; {new Date().getFullYear()} by Olya Pla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
