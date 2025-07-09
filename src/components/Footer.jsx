import React from "react";
import insta from "../img/Other/ins.png";
import linkedin from "../img/Other/link.png";
import logo from "../img/Other/logo.png";
import {
  Settings,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="logo" className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Steel Galaxy</h3>
                <p className="text-xs sm:text-sm text-slate-400">Premium Fasteners Export</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Leading global supplier of high-quality fasteners, nuts, bolts,
              and industrial materials. Trusted by businesses worldwide for
              premium steel products and exceptional service.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-4 sm:space-x-8">
              <a
                href="https://www.linkedin.com/company/steel-galaxy/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="w-[28px] sm:w-[30px] md:w-[33px]" />
              </a>
              <a
                href="https://www.instagram.com/steel_galaxy_india/?igsh=MW1weWU5emcwd21law%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" className="w-[28px] sm:w-[30px] md:w-[33px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["home", "about", "products", "contact"].map((id) => (
                <li key={id}>
                  <Link
                    to={`/${id === "home" ? "" : id}`}
                    className="text-slate-300 hover:underline hover:text-blue-400 transition-colors duration-200"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              {["Bolts", "Screws", "Nuts", "Washers", "Rivets", "Anchors","Stud & Rods"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/category/${item.toLowerCase()}`}
                    className="text-slate-300 hover:underline hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <p className="text-slate-300 text-sm">export@steelgalaxy.in</p>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5" />
                <div className="text-slate-300 text-sm space-y-0.5">
                  <p>+91 7096346228</p>
                  <p>+91 8128627011</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                <p className="text-slate-300 text-sm">
                  Gandhinagar, Gujarat,
                  <br />
                  India
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-purple-400 mt-0.5" />
                <p className="text-slate-300 text-sm">
                  Serving 50+ Countries Worldwide
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-center text-sm">
            <div className="text-white">&copy; Steel Galaxy. All rights reserved.</div>
            <div className="flex flex-col sm:flex-row sm:space-x-8 gap-2 sm:gap-0">
              <Link
                to="/privacy-policy"
                className="text-white hover:underline transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white hover:underline transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/help"
                className="text-white hover:underline transition-colors duration-200"
              >
                Help & Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
