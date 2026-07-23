import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
} from "react-icons/fa";

import Navbar from "../component/navbar";
import Footer from "../component/footer";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setForm({
      name:"",
      email:"",
      message:"",
    });
  };


  const contactInfo = [
    {
      icon:<FaPhoneAlt/>,
      title:"Call Us",
      text:"+250 788 628 312",
      link:"tel:+250788628312"
    },

    {
      icon:<FaEnvelope/>,
      title:"Email",
      text:"your-email@gmail.com",
      link:"mailto:your-email@gmail.com"
    },

    {
      icon:<FaMapMarkerAlt/>,
      title:"Location",
      text:"Rwanda",
      link:"#"
    }
  ];


  return (

    <>
      <Navbar />


      <section className="bg-gray-50 min-h-screen pt-24">


        {/* DARK BLUE HEADER */}

        <div className="bg-[#06283D] py-20 px-6 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#06283D] via-[#0B3954] to-[#06283D] opacity-90"></div>


          <div className="relative max-w-6xl mx-auto text-center text-white">

            <motion.h1
              initial={{opacity:0,y:40}}
              animate={{opacity:1,y:0}}
              transition={{duration:.7}}
              className="text-4xl md:text-6xl font-extrabold"
            >
              Get In Touch
            </motion.h1>


            <motion.p
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:.3}}
              className="mt-5 max-w-3xl mx-auto text-gray-200 text-lg"
            >
              Have questions, want to support our mission,
              or join our awareness programs? We are here to listen.
            </motion.p>


          </div>

        </div>



        {/* CONTENT */}

        <div className="max-w-7xl mx-auto px-6 py-20">


          <div className="grid lg:grid-cols-2 gap-12">


            {/* CONTACT INFORMATION */}

            <div>


              <motion.h2
              initial={{opacity:0,x:-40}}
              whileInView={{opacity:1,x:0}}
              className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                Contact Information
              </motion.h2>


              <p className="mt-4 text-gray-600 leading-relaxed">
                We believe communication creates change.
                Reach out to us and let's work together
                to build a healthier community.
              </p>



              <div className="mt-10 space-y-6">


                {
                  contactInfo.map((item,index)=>(

                    <motion.a
                    key={index}
                    href={item.link}
                    initial={{opacity:0,x:-30}}
                    whileInView={{opacity:1,x:0}}
                    transition={{delay:index*0.2}}
                    className="
                    flex items-center gap-5
                    bg-white rounded-2xl
                    p-6 shadow-md
                    hover:shadow-xl
                    transition
                    group
                    "
                    >


                      <div className="
                      w-16 h-16
                      rounded-full
                      bg-green-600
                      text-white
                      flex items-center justify-center
                      text-2xl
                      group-hover:scale-110
                      transition
                      ">
                        {item.icon}
                      </div>



                      <div>

                        <h3 className="font-bold text-xl">
                          {item.title}
                        </h3>


                        <p className="text-gray-600">
                          {item.text}
                        </p>

                      </div>


                    </motion.a>

                  ))
                }


              </div>


            </div>




            {/* PROFESSIONAL FORM */}


            <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            className="
            bg-white
            rounded-3xl
            shadow-2xl
            p-6 sm:p-10
            "
            >


              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send Us A Message
              </h2>



              <form
              onSubmit={handleSubmit}
              className="space-y-6"
              >



                <div className="relative">

                  <FaUser className="absolute left-5 top-5 text-gray-400"/>

                  <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="
                  w-full
                  pl-14 pr-5
                  py-4
                  rounded-xl
                  border border-gray-200
                  bg-gray-50
                  focus:bg-white
                  focus:border-green-600
                  focus:ring-2
                  focus:ring-green-200
                  outline-none
                  transition
                  "
                  />

                </div>



                <div className="relative">

                  <FaEnvelope className="absolute left-5 top-5 text-gray-400"/>

                  <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="
                  w-full
                  pl-14 pr-5
                  py-4
                  rounded-xl
                  border border-gray-200
                  bg-gray-50
                  focus:bg-white
                  focus:border-green-600
                  focus:ring-2
                  focus:ring-green-200
                  outline-none
                  transition
                  "
                  />

                </div>



                <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="
                w-full
                px-5 py-4
                rounded-xl
                border border-gray-200
                bg-gray-50
                resize-none
                focus:bg-white
                focus:border-green-600
                focus:ring-2
                focus:ring-green-200
                outline-none
                transition
                "
                />



                <button
                className="
                w-full
                py-4
                rounded-xl
                bg-green-600
                hover:bg-green-700
                text-white
                font-bold
                text-lg
                flex
                items-center
                justify-center
                gap-3
                shadow-lg
                hover:shadow-green-300
                transition
                "
                >

                  <FaPaperPlane/>

                  Send Message

                </button>


              </form>


            </motion.div>


          </div>


        </div>


      </section>
   <Footer />
    </>

  );
}