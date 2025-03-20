import React from "react";
import {
  FaPhone,
  FaHeadset,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Header Top */}
      <div className="bg-green-300 text-sm w-full">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-4 h-8">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 flex items-center gap-1">
              <FaPhone /> +91 987 654 3210
            </a>
            <a href="#" className="text-gray-700 flex items-center gap-1">
              <FaHeadset /> Hotline: +91 987 654 3210
            </a>
          </div>
          <p className="text-gray-700 hidden md:block">
            World's Fastest Online Shopping Destination
          </p>
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-gray-700">
              Help?
            </a>
            <a href="#" className="text-gray-700">
              Track Order?
            </a>
            <select className="border px-2 py-1 rounded text-gray-700">
              <option>Vietnam</option>
              <option>English</option>
              <option>China</option>
            </select>
            <select className="border px-2 py-1 rounded text-gray-700">
              <option>VND</option>
              <option>USD</option>
            </select>
          </div>
        </div>
      </div>

      {/* Header Main */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div>
          <img
            src="../../../public/img/grabit.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Search Bar */}
        <form className="flex items-center border rounded-lg overflow-hidden w-1/2">
          <input
            type="text"
            className="px-4 py-2 w-full focus:outline-none"
            placeholder="Search..."
          />
          <button className="px-4 bg-transparent ">
            <FaSearch />
          </button>
        </form>

        {/* User Actions */}
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <FaUser className="text-xl" />
            <div>
              <p className="text-sm">Account</p>
              <a href="#" className="text-blue-600 text-sm">
                Login
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart className="text-xl" />
            <div>
              <p className="text-sm">Wishlist</p>
              <a href="#" className="text-blue-600 text-sm">
                3-items
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaShoppingBag className="text-xl" />
            <div>
              <p className="text-sm">Cart</p>
              <a href="#" className="text-blue-600 text-sm">
                3-items
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
