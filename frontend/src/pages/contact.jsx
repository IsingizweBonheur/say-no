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


  const [form,setForm] = useState({
    name:"",
    email:"",
    message:"",
  });



  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };



  const handleSubmit=(e)=>{
    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    setForm({
      name:"",
      email:"",
      message:"",
    });
  };



  const contactInfo=[

    {
      icon:<FaPhoneAlt/>,
      title:"Call Us",
      text:"+250 788 628 312",
      link:"tel:+250788628312"
    },


    {
      icon:<FaEnvelope/>,
      title:"Email Us",
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



    {/* HERO */}

    <section className="
      relative
      bg-[#06283D]
      text-white
      py-28
      overflow-hidden
    ">


      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#06283D]
        via-[#0B3954]
        to-[#06283D]
      "></div>



      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:.8
        }}

        className="
          relative
          max-w-6xl
          mx-auto
          px-6
          text-center
        "

      >


        <h1 className="
          text-5xl
          md:text-6xl
          font-extrabold
          mt-5
        ">
          Get In Touch
        </h1>



        <p className="
          max-w-3xl
          mx-auto
          mt-6
          text-gray-200
          text-lg
          leading-8
        ">
          Have questions, want to support our mission,
          or join our awareness programs? We are here to listen.
        </p>



      </motion.div>



      {/* Curve */}

      <div className="
        absolute
        bottom-0
        left-0
        w-full
        h-14
        bg-gray-50
        rounded-t-[50%]
      "></div>


    </section>





    {/* CONTENT */}


    <section className="
      bg-gray-50
      py-20
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-6
      ">


        <div className="
          grid
          lg:grid-cols-2
          gap-12
          items-start
        ">




        {/* CONTACT INFO */}


        <motion.div

          initial={{
            opacity:0,
            x:-40
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.7
          }}

        >


          <span className="
            text-green-600
            uppercase
            tracking-widest
            font-semibold
          ">
            Contact Information
          </span>



          <h2 className="
            text-4xl
            font-bold
            text-gray-900
            mt-3
          ">
            Let's Work Together
          </h2>



          <p className="
            mt-5
            text-gray-600
            leading-8
          ">
            Communication creates change.
            Reach out to us and let's build
            a healthier and safer community together.
          </p>





          <div className="
            mt-10
            space-y-6
          ">


          {
            contactInfo.map((item,index)=>(


              <motion.a

                key={index}

                href={item.link}

                whileHover={{
                  x:10
                }}

                className="
                  bg-white
                  rounded-2xl
                  p-6
                  flex
                  items-center
                  gap-5
                  shadow-md
                  hover:shadow-xl
                  transition
                "

              >


                <div className="
                  w-16
                  h-16
                  rounded-full
                  bg-green-600
                  text-white
                  flex
                  items-center
                  justify-center
                  text-2xl
                ">

                  {item.icon}

                </div>



                <div>

                  <h3 className="
                    text-xl
                    font-bold
                    text-gray-900
                  ">
                    {item.title}
                  </h3>


                  <p className="
                    text-gray-600
                  ">
                    {item.text}
                  </p>


                </div>


              </motion.a>


            ))
          }


          </div>



        </motion.div>







        {/* FORM */}


        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          className="
            bg-white
            rounded-3xl
            p-8
            md:p-10
            shadow-xl
          "

        >



          <h2 className="
            text-3xl
            font-bold
            text-gray-900
            mb-8
          ">
            Send Us A Message
          </h2>




          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >


            <div className="relative">

              <FaUser className="
                absolute
                left-5
                top-5
                text-gray-400
              "/>


              <input

                type="text"

                name="name"

                value={form.name}

                onChange={handleChange}

                placeholder="Full Name"

                required

                className="
                  w-full
                  pl-14
                  py-4
                  rounded-xl
                  border
                  bg-gray-50
                  focus:bg-white
                  focus:border-green-600
                  outline-none
                "

              />

            </div>





            <div className="relative">

              <FaEnvelope className="
                absolute
                left-5
                top-5
                text-gray-400
              "/>


              <input

                type="email"

                name="email"

                value={form.email}

                onChange={handleChange}

                placeholder="Email Address"

                required

                className="
                  w-full
                  pl-14
                  py-4
                  rounded-xl
                  border
                  bg-gray-50
                  focus:bg-white
                  focus:border-green-600
                  outline-none
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
                px-5
                py-4
                rounded-xl
                border
                bg-gray-50
                focus:bg-white
                focus:border-green-600
                outline-none
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
                justify-center
                items-center
                gap-3
                transition
                shadow-lg
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