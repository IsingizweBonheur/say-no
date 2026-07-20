import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import heroImage from "../assets/hero.jpeg";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Drug Awareness"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-48">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight text-white"
          >
            Choose Life.
            <br />

            <span className="text-green-500">
              Say No To Drugs.
            </span>

            <br />

            Build Your Future.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 120 }}
            transition={{ duration: 1 }}
            className="h-1 bg-green-500 mt-6 mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
          >
            We are a youth-driven initiative committed to preventing
            drug abuse, empowering communities, and building a strong,
            healthy, and hopeful generation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <button
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold text-white transition"
            >
              Get Involved
            </button>

            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center justify-center gap-3 border border-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-500 transition"
            >
              <FaPlay />
              Watch Video
            </button>
          </motion.div>
        </div>
      </div>

      {/* VIDEO POPUP */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            onClick={() => setShowVideo(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          >
            {/* Video Card */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-red-600 transition flex items-center justify-center"
              >
                <FaTimes />
              </button>

              {/* Responsive YouTube Video */}
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/X9GomoXpclI?autoplay=1&mute=1&rel=0"
                  title="Drug Awareness Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;