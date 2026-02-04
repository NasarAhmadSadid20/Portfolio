import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navbarLinks } from "../constants";
import MobileNavbar from "./mobileNavbar"
import { Menu, X } from "lucide-react";
import { useClickOutside, useResize } from "../hook";
import { navbarVariants } from "../constants/motion";

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const mobileNavbarRef = React.useRef(null);
  const { resizedX } = useResize({ targetx: 768 });
  const location = useLocation();

  useClickOutside(mobileNavbarRef, () => setToggleMenu(false));

  React.useEffect(() => {
    if (resizedX) setToggleMenu(false);
  }, [resizedX]);

  // تغییر رنگ هدر هنگام اسکرول
  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // فعال کردن لینک بر اساس section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // اسکرول به hash بدون رفرش
  React.useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed z-[1000] flex w-full items-center transition-all duration-300 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
        variants={navbarVariants}
        initial={["default", "slideStart"]}
        animate={[isScrolled ? "active" : "default", "slideEnd"]}
        transition={{ duration: 0.25 }}
      >
        <div className="container flex h-full items-center justify-between">
          {/* لوگو */}
          <Link to={"/"} className="flex h-3/4 items-center gap-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg">
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
            <div>
              <p className="text-2xl font-extrabold text-black-500 font-['Poppins'] leading-tight">
                N.SADID
              </p>
            </div>
          </Link>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-4">
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      if (link.hash) {
                        e.preventDefault();
                        const element = document.querySelector(link.hash);
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className={`link ${
                      activeSection === link.id ? "text-primary-50" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link to={"/contact"} className="btn-primary hidden md:inline-flex">
            Contact
          </Link>

          {/* آیکن موبایل */}
          <button
            className="cursor-pointer text-gray-900 md:hidden"
            onClick={(e) => {
              e.stopPropagation();
              setToggleMenu(!toggleMenu);
            }}
          >
            {toggleMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* منو موبایل */}
      <AnimatePresence>
        {toggleMenu && (
          <MobileNavbar
            ref={mobileNavbarRef}
            setToggleMenu={setToggleMenu}
            activeSection={activeSection}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
