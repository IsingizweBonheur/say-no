import React from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaUserFriends,
  FaDonate,
  FaHandshake,
  FaBullhorn,
  FaUsers,
  FaSchool,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import heroImage from "../assets/hero.jpeg";

const INVOLVEMENT_COLORS = {
  volunteer: "#E74C3C",
  ambassador: "#3498DB",
  donate: "#2ECC71",
  partner: "#F39C12",
  events: "#9B59B6",
  online: "#1ABC9C",
};

export default function GetInvolved() {
  const involvement = [
    {
      title: "Become a Volunteer",
      icon: <FaHandsHelping />,
      color: INVOLVEMENT_COLORS.volunteer,
      description:
        "Join our team and contribute your time, skills, and passion to educate and support young people.",
      points: [
        "Youth mentoring",
        "School campaigns",
        "Community outreach",
        "Event organization",
      ],
      button: "Become Volunteer",
    },
    {
      title: "Youth Ambassador",
      icon: <FaUserFriends />,
      color: INVOLVEMENT_COLORS.ambassador,
      description:
        "Become a role model who inspires other young people to make positive and healthy choices.",
      points: [
        "Peer education",
        "Youth leadership",
        "Awareness activities",
        "Community representation",
      ],
      button: "Join Ambassador",
    },
    {
      title: "Support Our Mission",
      icon: <FaDonate />,
      color: INVOLVEMENT_COLORS.donate,
      description:
        "Your support helps us organize prevention programs, workshops, and community activities.",
      points: [
        "Support campaigns",
        "Fund youth programs",
        "Sponsor events",
        "Provide resources",
      ],
      button: "Donate Now",
    },
    {
      title: "Partner With Us",
      icon: <FaHandshake />,
      color: INVOLVEMENT_COLORS.partner,
      description:
        "Organizations and institutions can work with us to create stronger prevention programs.",
      points: [
        "Schools",
        "Companies",
        "NGOs",
        "Community organizations",
      ],
      button: "Become Partner",
    },
    {
      title: "Organize Awareness Events",
      icon: <FaBullhorn />,
      color: INVOLVEMENT_COLORS.events,
      description:
        "Invite our team to your school or community and help spread drug prevention awareness.",
      points: [
        "School visits",
        "Community talks",
        "Public campaigns",
        "Educational sessions",
      ],
      button: "Request Event",
    },
    {
      title: "Spread Awareness Online",
      icon: <FaUsers />,
      color: INVOLVEMENT_COLORS.online,
      description:
        "Help us reach more young people by sharing messages about a drug-free lifestyle.",
      points: [
        "Share campaigns",
        "Follow our pages",
        "Share educational content",
        "Promote positive messages",
      ],
      button: "Share Campaign",
    },
  ];

  const stats = [
    {
      number: "5000+",
      text: "Youth Reached",
      icon: <FaUsers />
    },
    {
      number: "50+",
      text: "Schools Supported",
      icon: <FaSchool />
    },
    {
      number: "100+",
      text: "Community Events",
      icon: <FaBullhorn />
    },
    {
      number: "200+",
      text: "Active Volunteers",
      icon: <FaHeart />
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
        
        {/* HERO SECTION */}
        <section
          className="relative h-[480px] sm:h-[560px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Get involved in our mission"
        >
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-6xl mx-auto text-center text-white px-6"
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-4 border border-white/20 px-4 py-1.5 rounded-full">
              Join Us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Get Involved
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 max-w-3xl mx-auto text-gray-200 text-lg"
            >
              Join our movement and help us empower young people
              to create a healthier, safer, and drug-free future.
            </motion.p>
          </motion.div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-20 text-center px-6 border-b border-gray-200 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#06283D]">
              Make A Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight">
              Together We Can Make A Difference
            </h2>
            <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-relaxed">
              Everyone has a role to play. Whether through volunteering,
              partnerships, donations, or awareness, your contribution
              helps protect young people from drug abuse.
            </p>
          </motion.div>
        </section>

        {/* CARDS */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {involvement.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-gray-300"
              >
                <div 
                  className="w-14 h-14 flex items-center justify-center text-2xl text-white rounded-2xl mb-5 group-hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-gray-700 text-sm">
                      <span style={{ color: item.color }} className="font-bold">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.1em] uppercase text-gray-700 group-hover:text-black group-hover:gap-4 transition-all duration-300 border-b-2 border-gray-300 pb-1.5 hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4 rounded-sm">
                  {item.button}
                  <FaArrowRight
                    className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* <section className="py-16 px-6 bg-[#06283D]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <div className="text-4xl flex justify-center mb-3 text-white/80">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-extrabold">{stat.number}</div>
                <div className="text-sm text-gray-300 mt-1">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* CTA SECTION */}
        <section className="py-20 px-6 bg-white border-t border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#06283D]">
              Take Action
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-5 tracking-tight">
              Your Action Can Change A Life
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-8">
              Join us today and become part of a movement building a drug-free generation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#06283D] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#0B3954] transition-colors duration-300 hover:scale-105 transform"
            >
              Join Us Today
            </a>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}