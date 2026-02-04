import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navbarLinks } from "../constants";
import { X } from "lucide-react";

const MobileNavbar = forwardRef(({ setToggleMenu, activeSection }, ref) => {
  return (
    <motion.div
      ref={ref}
      className="fixed top-0 right-0 z-[2000] h-screen w-64 bg-white shadow-lg md:hidden flex flex-col"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "tween", duration: 0.12, ease: "easeOut" }}
    >
      {/* آیکن ضربدر بالای منو */}
      <div className="flex justify-end px-4 pt-4">
        <button
          onClick={() => setToggleMenu(false)}
          className="text-gray-900 cursor-pointer"
        >
          <X size={28} />
        </button>
      </div>

      {/* لوگو سمت چپ لینک به صفحه اصلی + بستن منو */}
      <Link
        to="/"
        onClick={() => setToggleMenu(false)}
        className="flex items-center gap-3 px-6 mt-6 mb-8"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg flex-shrink-0">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-900">N.SADID</p>
          <p className="text-sm text-gray-500">CS Student</p>
        </div>
      </Link>

      {/* لینک‌ها */}
      <ul className="flex flex-col gap-y-6 px-6">
        {navbarLinks.map((link, index) => (
          <motion.li
            key={link.id}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.02, duration: 0.1, ease: "easeOut" }}
          >
            <Link
              to={link.path}
              onClick={(e) => {
                setToggleMenu(false);
                if (link.hash) {
                  e.preventDefault();
                  const element = document.querySelector(link.hash);
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`block text-gray-900 font-medium ${
                activeSection === link.id ? "text-blue-600" : ""
              }`}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
});

export default MobileNavbar;
