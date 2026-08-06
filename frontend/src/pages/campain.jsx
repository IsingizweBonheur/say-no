import React from "react";
import { motion } from "framer-motion";
import campaignOne from "../assets/campain.png";
import campaignTwo from "../assets/campains.png";
import { FaBullhorn, FaHandsHelping } from "react-icons/fa";

import Navbar from "../component/navbar";
import Footer from "../component/footer";


export default function Campain() {


  const campaigns = [

    {
      title: "Police Partnership Awareness Campaign",
      image: campaignOne,
      icon: <FaBullhorn className="text-3xl text-[#346739]" />,

      description:
        "Working together with Rwanda National Police, our club organizes awareness campaigns to educate students and communities about the dangers of drug abuse, crime prevention, and responsible citizenship. Together, we create safer and healthier communities.",

    },
    {
      title: "Teaching Children About Drug Effects",
      image: campaignTwo,
      icon: <FaHandsHelping className="text-3xl text-[#346739]" />,

      description:
        "We visit schools and communities to educate children about the harmful effects of drugs. Through discussions, mentorship, and awareness activities, we empower young people to make positive choices and become ambassadors for a drug-free future.",

    },

  ];



  return (

    <>

      <Navbar />


      <main className="bg-gray-50">



        {/* ================= CAMPAIGN HERO ================= */}


        <section
          className="
          relative
          overflow-hidden
          bg-[#06283D]
          py-24
          md:py-32
          px-6
          text-white
          "
        >


          {/* Gradient Overlay */}

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#06283D]
            via-[#0B3954]
            to-[#06283D]
            opacity-90
            "
          ></div>




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



            <h1
              className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-extrabold
              leading-tight
              "
            >

              Drug Awareness Campaigns,
              <br />

              Building A Safer Future

            </h1>

            <p
              className="
              mt-6
              max-w-3xl
              mx-auto
              text-gray-200
              text-base
              md:text-xl
              leading-relaxed
              "
            >

              Through education, partnerships, and community activities,
              we inspire children and families to understand the dangers
              of drug abuse and choose a healthy lifestyle.

            </p>



          </motion.div>





          {/* Bottom Curve */}

          <div
            className="
            absolute
            bottom-0
            left-0
            w-full
            h-20
            bg-white
            rounded-t-[50%]
            "
          ></div>


        </section>





    {/* ================= CAMPAIGNS ================= */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="space-y-24">

    {campaigns.map((campaign, index) => (

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >

        {/* IMAGE */}

        <div
          className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
        >
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-[420px] rounded-3xl object-cover shadow-2xl hover:scale-[1.02] transition duration-500"
          />
        </div>

        {/* TEXT */}

        <div
          className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
        >

          <div className="flex items-center gap-4 mb-6">

            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              {campaign.icon}
            </div>

            <h2 className="text-3xl font-bold text-[#346739]">
              {campaign.title}
            </h2>

          </div>

          <p className="text-gray-600 leading-9 text-lg">
            {campaign.description}
          </p>

        </div>

      </motion.div>

    ))}

  </div>

</section>
        {/* ================= CALL TO ACTION ================= */}


        <section
          className="
          bg-[#346739]
          py-20
          "
        >


          <div
            className="
            max-w-4xl
            mx-auto
            px-6
            text-center
            "
          >



            <h2
              className="
              text-4xl
              font-bold
              text-white
              "
            >

              Join Our Mission

            </h2>





            <p
              className="
              text-green-100
              mt-5
              text-lg
              leading-8
              "
            >

              Together we can educate more children,
              prevent drug abuse, and inspire the next generation
              to make positive decisions.

            </p>
            <button
              className="
              mt-8
              bg-white
              text-[#346739]
              font-semibold
              px-8
              py-4
              rounded-full
              hover:bg-gray-100
              transition
              "
            >

              Get Involved

            </button>
          </div>


        </section>



      </main>



      <Footer />


    </>

  );

}