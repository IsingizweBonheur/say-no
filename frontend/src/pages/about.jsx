import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaHandsHelping,
  FaBullhorn,
  FaShieldAlt,
} from "react-icons/fa";
import hero from "../assets/hero.jpeg";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Partner from './partener';
import Vision from "./vision";
import Leader from "./leader";


export default function About() {


  const steps = [
    {
      icon: <FaBullhorn />,
      title: "Raise Awareness",
      description:
        "We educate communities through campaigns, seminars, and digital platforms about the dangers of drug abuse.",
    },

    {
      icon: <FaUsers />,
      title: "Community Engagement",
      description:
        "We partner with schools, families, and community leaders to promote healthy lifestyles and positive choices.",
    },

    {
      icon: <FaHandsHelping />,
      title: "Support & Guidance",
      description:
        "We connect individuals with counseling, mentors, and support systems that encourage positive change.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Build a Drug-Free Future",
      description:
        "Together we inspire people to make informed decisions and become ambassadors for healthy living.",
    },
  ];



  return (

    <>

      <Navbar />


      <section className="
        bg-gray-50
        min-h-screen
        pt-20
      ">


        {/* ================= ABOUT HEADER ================= */}


        <div className="
          relative
          overflow-hidden
          bg-[#06283D]
          py-24
          md:py-32
          px-6
          text-white
        ">


          {/* Gradient */}

          <div className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#06283D]
            via-[#0B3954]
            to-[#06283D]
            opacity-90
          "></div>




          {/* Content */}

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
              z-10
              max-w-6xl
              mx-auto
              text-center
            "

          >


            <h1 className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extrabold
              leading-tight
            ">

              Empowering Communities,
              <br />

              Creating A Drug-Free Future

            </h1>




            <p className="
              mt-6
              max-w-3xl
              mx-auto
              text-gray-200
              text-base
              md:text-xl
              leading-relaxed
            ">

              Together we educate, inspire, and empower individuals and
              communities to stand against drug abuse and build a healthier
              tomorrow.

            </p>


          </motion.div>





          {/* Bottom Curve */}

          <div className="
            absolute
            bottom-0
            left-0
            w-full
            h-20
            bg-white
            rounded-t-[50%]
          "></div>


        </div>





        {/* ================= WHO WE ARE ================= */}


        <section className="
          py-24
          bg-white
        ">


          <div className="
            max-w-7xl
            mx-auto
            px-6
            grid
            lg:grid-cols-2
            gap-14
            items-center
          ">



            <motion.div

              initial={{
                opacity:0,
                x:-50
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:.8
              }}

            >


              <img

                src={hero}

                alt="Community"

                className="
                  rounded-3xl
                  shadow-2xl
                  object-cover
                  h-[450px]
                  w-full
                "

              />


            </motion.div>






            <motion.div

              initial={{
                opacity:0,
                x:50
              }}

              whileInView={{
                opacity:1,
                x:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:.8
              }}

            >


              <span className="
                text-green-600
                uppercase
                tracking-widest
                font-semibold
              ">

                Who We Are

              </span>



              <h2 className="
                text-3xl
                md:text-4xl
                font-bold
                mt-3
                mb-6
                text-gray-900
              ">

                Empowering Communities To Live Drug-Free

              </h2>



              <p className="
                text-gray-600
                leading-8
                mb-6
              ">

                Say No to Drug is a community-driven initiative committed
                to preventing drug abuse through education, awareness,
                and positive engagement.

              </p>



              <p className="
                text-gray-600
                leading-8
              ">

                By working alongside schools, families, volunteers, and
                local organizations, we create opportunities for young
                people to grow with confidence, purpose, and hope while
                promoting safer communities.

              </p>


            </motion.div>


          </div>


        </section>







        {/* ================= HOW WE WORK ================= */}


        <section className="
          py-24
          bg-gray-50
        ">


          <div className="
            max-w-7xl
            mx-auto
            px-6
          ">


            <div className="
              text-center
              mb-16
            ">


              <span className="
                text-green-600
                uppercase
                tracking-widest
                font-semibold
              ">

                Our Process

              </span>




              <h2 className="
                text-4xl
                font-bold
                mt-3
                text-gray-900
              ">

                How We Work

              </h2>



              <p className="
                mt-5
                text-gray-600
                max-w-3xl
                mx-auto
              ">

                Our approach combines education, collaboration,
                and continuous community support to reduce drug abuse.

              </p>


            </div>





            <div className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            ">


              {steps.map((step,index)=>(


                <motion.div

                  key={index}

                  initial={{
                    opacity:0,
                    y:40
                  }}

                  whileInView={{
                    opacity:1,
                    y:0
                  }}

                  viewport={{
                    once:true
                  }}

                  transition={{
                    delay:index*0.15
                  }}

                  whileHover={{
                    y:-10
                  }}

                  className="
                    bg-white
                    rounded-2xl
                    p-8
                    shadow-lg
                  "

                >


                  <div className="
                    w-16
                    h-16
                    rounded-full
                    bg-green-100
                    text-green-600
                    flex
                    items-center
                    justify-center
                    text-3xl
                    mb-6
                  ">

                    {step.icon}

                  </div>



                  <h3 className="
                    text-xl
                    font-bold
                    mb-4
                  ">

                    {step.title}

                  </h3>



                  <p className="
                    text-gray-600
                    leading-7
                  ">

                    {step.description}

                  </p>


                </motion.div>


              ))}


            </div>


          </div>


        </section>






        {/* ================= VISION ================= */}

        <Vision />



        {/* ================= LEADER ================= */}

        <Leader />


      <Partner />
      </section>



      <Footer />


    </>

  );

}
