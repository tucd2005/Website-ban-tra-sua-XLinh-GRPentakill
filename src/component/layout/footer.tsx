import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-gray-700">
      <div className="  px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">Grabit</h2>
          <p className="mt-2">
            Grabit is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <div className="mt-4 flex space-x-2">
            <button className="bg-black text-white px-4 py-2 rounded">
              Google Play
            </button>
            <button className="bg-black text-white px-4 py-2 rounded">
              App Store
            </button>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold">Category</h3>
          <ul className="mt-2 space-y-1">
            <li>Dried Fruit</li>
            <li>Cookies</li>
            <li>Foods</li>
            <li>Fresh Fruit</li>
            <li>Tuber Root</li>
            <li>Vegetables</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-1">
            <li>About us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms & Conditions</li>
            <li>Secure Payment</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <p>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
          <p>+00 9876543210</p>
          <p>example@email.com</p>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF className="text-xl" />
            <FaTwitter className="text-xl" />
            <FaLinkedinIn className="text-xl" />
            <FaInstagram className="text-xl" />
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10">
        <p>Copyright &copy; Grabit all rights reserved. Powered by Grabit.</p>
      </div>
    </footer>
  );
};

export default Footer;
