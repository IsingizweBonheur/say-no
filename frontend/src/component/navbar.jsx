import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Update path if needed

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-gray-900/95
        backdrop-blur-md
        shadow-lg
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Say No To Drugs Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-white font-bold text-lg md:text-xl uppercase">
              Say No To Drugs
            </h1>

            <p className="text-green-400 text-sm">
              Kigali • Rwanda
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul
          className="
            hidden
            lg:flex
            items-center
            gap-8
          "
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="
                  text-white
                  font-medium
                  hover:text-green-400
                  transition
                  duration-300
                "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Join Us Button */}
        <Link
          to="/get-involved"
          className="
            hidden
            lg:flex
            items-center
            bg-green-600
            hover:bg-green-700
            text-white
            px-6
            py-2.5
            rounded-xl
            font-semibold
            transition
            duration-300
          "
        >
          Join Us
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="
            lg:hidden
            text-white
            text-2xl
          "
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            lg:hidden
            bg-gray-900
            border-t
            border-gray-700
          "
        >
          <ul
            className="
              flex
              flex-col
              p-6
              gap-5
            "
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="
                    text-white
                    font-semibold
                    hover:text-green-400
                    transition
                  "
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                to="/get-involved"
                onClick={() => setOpen(false)}
                className="
                  block
                  text-center
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                "
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;