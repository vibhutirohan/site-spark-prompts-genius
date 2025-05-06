
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto sm:px-6 lg:px-8 px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">About Uplaud</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-[#6214a8] transition-colors">Features</a>
              </li>
              <li>
                <a href="#for-customers" className="text-gray-600 hover:text-[#6214a8] transition-colors">For Customers</a>
              </li>
              <li>
                <a href="#for-businesses" className="text-gray-600 hover:text-[#6214a8] transition-colors">For Businesses</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#6214a8] transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Uplaud. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-[#6214a8] transition-colors">
              Privacy Policy
            </Link>
            <a href="#" className="text-sm text-gray-500 hover:text-[#6214a8] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-[#6214a8] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
