import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";


export default function Footer() {

  const [email, setEmail] = useState("");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Contact", path: "/contact" },
  ];


  return (

    <footer className="bg-blue-950 text-white">


      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-16
      ">


        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
        ">



          {/* About + Logo */}
          <div>


            <div className="
              flex
              items-center
              gap-3
              mb-5
            ">

              <img
                src={logo}
                alt="Say No To Drugs Logo"
                className="
                  w-14
                  h-14
                  object-contain
                  rounded-full
                "
              />


              <div>

                <h2 className="
                  text-2xl
                  font-bold
                ">
                  Say No
                </h2>


                <span className="
                  text-green-400
                  font-semibold
                ">
                  To Drugs
                </span>

              </div>


            </div>



            <p className="
              text-gray-300
              leading-relaxed
            ">
              Together we educate, empower, and support young people
              to build a healthy and drug-free future.
            </p>




            {/* Social Icons */}
            <div className="
              flex
              gap-4
              mt-6
            ">


              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-green-600
                  transition
                "
              >
                <FaFacebookF />
              </a>


              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-green-600
                  transition
                "
              >
                <FaTwitter />
              </a>


              <a
                href="https://www.instagram.com/antidrugs2026/"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-green-600
                  transition
                "
              >
                <FaInstagram />
              </a>


              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-green-600
                  transition
                "
              >
                <FaLinkedinIn />
              </a>


            </div>


          </div>





          {/* Quick Links */}
          <div>


            <h3 className="
              text-xl
              font-semibold
              mb-5
            ">
              Quick Links
            </h3>


            <ul className="space-y-3">


              {navLinks.map((link,index)=>(

                <li key={index}>

                  <Link
                    to={link.path}
                    className="
                      text-gray-300
                      hover:text-green-400
                      transition
                    "
                  >
                    {link.name}
                  </Link>

                </li>

              ))}


            </ul>


          </div>






          {/* Contact */}
          <div>


            <h3 className="
              text-xl
              font-semibold
              mb-5
            ">
              Contact Us
            </h3>



            <div className="
              space-y-4
              text-gray-300
            ">


              <p className="
                flex
                items-center
                gap-3
              ">
                <FaPhone className="text-green-400"/>
                0788628312
              </p>



              <p className="
                flex
                items-center
                gap-3
              ">
                <FaEnvelope className="text-green-400"/>
                info@saynotodrugs.org
              </p>




              <p className="
                flex
                items-center
                gap-3
              ">
                <FaMapMarkerAlt className="text-green-400"/>
                Rwanda
              </p>


            </div>


          </div>






          {/* Newsletter */}
          <div>


            <h3 className="
              text-xl
              font-semibold
              mb-5
            ">
              Newsletter
            </h3>



            <p className="
              text-gray-300
              mb-5
            ">
              Subscribe to receive updates about our campaigns.
            </p>




            <div className="
              flex
              flex-col
              gap-3
            ">


              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Your email"
                className="
                  px-4
                  py-3
                  rounded-lg
                  bg-white/10
                  border
                  border-white/20
                  text-white
                  outline-none
                  placeholder:text-gray-400
                "
              />



              <button
                className="
                  bg-green-600
                  hover:bg-green-700
                  py-3
                  rounded-lg
                  font-semibold
                  transition
                "
              >
                Subscribe
              </button>


            </div>


          </div>


        </div>


      </div>





      {/* Bottom Footer */}
      <div className="
        border-t
        border-white/10
        py-5
        text-center
        text-gray-400
      ">

        © {new Date().getFullYear()} Say No To Drugs.
        All Rights Reserved.

      </div>



    </footer>

  );
}