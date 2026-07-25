import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaEye,
  FaRocket,
  FaHandsHelping,
  FaUsers,
  FaGraduationCap,
  FaGlobeAfrica,
} from "react-icons/fa";

const VALUE_COLORS = {
  empowerment: "#E74C3C", // Red
  community: "#3498DB", // Blue
  education: "#2ECC71", // Green
  africanUnity: "#F39C12", // Orange
};

export default function Vision() {
  const stats = [
    { number: "2026", label: "Founded" },
    { number: "50+", label: "Schools Reached" },
    { number: "10K+", label: "Youth Impacted" },
    { number: "20+", label: "Community Partners" },
  ];

  const values = [
    {
      icon: <FaHandsHelping />,
      title: "Empowerment",
      color: VALUE_COLORS.empowerment,
      description: "We empower young people with knowledge and skills to make informed decisions about their lives."
    },
    {
      icon: <FaUsers />,
      title: "Community",
      color: VALUE_COLORS.community,
      description: "We believe in the power of community to create lasting change and support systems."
    },
    {
      icon: <FaGraduationCap />,
      title: "Education",
      color: VALUE_COLORS.education,
      description: "We provide accurate information and educational resources to prevent drug abuse."
    },
    {
      icon: <FaGlobeAfrica />,
      title: "African Unity",
      color: VALUE_COLORS.africanUnity,
      description: "We work across Africa to create a united front against drug abuse."
    }
  ];

  return (
    <div className="bg-gray-50 font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
      
      {/* MISSION & VISION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#06283D]">
            Our Purpose
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight">
            Our Mission & Vision
          </h1>
          <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-relaxed">
            Guiding our work towards a drug-free generation through education, 
            empowerment, and community action.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center text-3xl text-white bg-[#06283D] rounded-2xl mb-6">
              <FaBullseye />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              To empower young people with knowledge, skills, and support systems to make 
              informed decisions, resist drug abuse, and become positive agents of change 
              in their communities.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-[#06283D] font-bold text-xl">01</span>
                <div>
                  <h4 className="font-bold text-gray-900">Education</h4>
                  <p className="text-gray-600 text-sm">Provide accurate drug awareness education</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#06283D] font-bold text-xl">02</span>
                <div>
                  <h4 className="font-bold text-gray-900">Empowerment</h4>
                  <p className="text-gray-600 text-sm">Build leadership and life skills</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#06283D] font-bold text-xl">03</span>
                <div>
                  <h4 className="font-bold text-gray-900">Community</h4>
                  <p className="text-gray-600 text-sm">Create supportive community networks</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VISION - With special background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl p-10 shadow-lg border hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
              borderColor: "rgba(255,255,255,0.1)"
            }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center text-3xl text-[#16213e] bg-white rounded-2xl mb-6">
                <FaEye />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                A united, drug-free Africa where every young person has the opportunity to 
                reach their full potential and contribute to a prosperous, healthy society.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-white font-bold text-xl opacity-60">01</span>
                  <div>
                    <h4 className="font-bold text-white">Drug-Free Generation</h4>
                    <p className="text-gray-400 text-sm">Youth empowered to say no to drugs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-white font-bold text-xl opacity-60">02</span>
                  <div>
                    <h4 className="font-bold text-white">Healthy Communities</h4>
                    <p className="text-gray-400 text-sm">Safe, supportive environments for youth</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-white font-bold text-xl opacity-60">03</span>
                  <div>
                    <h4 className="font-bold text-white">African Unity</h4>
                    <p className="text-gray-400 text-sm">Collaborative action across the continent</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#06283D]">
              Guiding Principles
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight">
              Our Values
            </h2>
            <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-relaxed">
              These values guide everything we do as we work towards a drug-free generation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div 
                  className="w-14 h-14 flex items-center justify-center text-2xl text-white rounded-2xl mb-5"
                  style={{ backgroundColor: value.color }}
                >
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
