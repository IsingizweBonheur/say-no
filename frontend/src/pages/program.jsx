import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBookOpen,
  FaUsers,
  FaFutbol,
  FaSchool,
  FaHeart,
  FaGlobeAfrica,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import heroImage from "../assets/hero.jpeg";
import Vision from "./vision";

const PROGRAM_COLORS = {
  awareness: "#E74C3C", // Red
  leadership: "#3498DB", // Blue
  sports: "#2ECC71", // Green
  school: "#F39C12", // Orange
  counseling: "#9B59B6", // Purple
  community: "#1ABC9C", // Teal
};

const PROGRAMS = [
  {
    id: "awareness",
    title: "Drug Awareness & Education",
    icon: <FaBookOpen />,
    color: PROGRAM_COLORS.awareness,
    short:
      "Educating young people about the dangers of drug abuse and promoting healthy decisions.",
    description:
      "Our awareness program provides accurate information about drug effects, prevention strategies, and positive lifestyle choices through schools and community campaigns.",
    mission: "To equip young people with accurate knowledge and critical thinking skills to make informed decisions about drug use.",
    vision: "A society where every young person is educated and empowered to reject drug abuse.",
    activities: [
      "School awareness seminars",
      "Community education campaigns",
      "Interactive workshops",
      "Educational materials distribution",
      "Public discussions and debates",
    ],
    audience: "Students, parents, teachers, and community members.",
  },
  {
    id: "leadership",
    title: "Youth Leadership Program",
    icon: <FaUsers />,
    color: PROGRAM_COLORS.leadership,
    short: "Building young leaders who inspire others to choose a drug-free life.",
    description:
      "We empower young people with leadership skills, confidence, and knowledge to become positive role models in their communities.",
    mission: "To develop a generation of confident, ethical young leaders who champion drug-free living.",
    vision: "Young leaders across Africa driving positive change in their communities.",
    activities: [
      "Leadership training workshops",
      "Peer mentoring programs",
      "Public speaking opportunities",
      "Youth empowerment sessions",
      "Community project initiatives",
    ],
    audience: "Young people interested in creating positive change.",
  },
  {
    id: "sports",
    title: "Sports Against Drugs",
    icon: <FaFutbol />,
    color: PROGRAM_COLORS.sports,
    short: "Using sports activities to promote teamwork and healthy lifestyles.",
    description:
      "Sports create a safe environment where youth develop discipline, teamwork, confidence, and avoid harmful behaviors.",
    mission: "To harness the power of sports to build character, discipline, and drug-free habits among youth.",
    vision: "A generation of healthy, active youth who choose sports over substances.",
    activities: [
      "Football competitions",
      "Fitness and wellness activities",
      "Community sports tournaments",
      "Sports awareness events",
      "Athlete mentorship programs",
    ],
    audience: "Children, teenagers, and young adults.",
  },
  {
    id: "school",
    title: "School Anti-Drug Clubs",
    icon: <FaSchool />,
    color: PROGRAM_COLORS.school,
    short: "Creating school communities that promote drug prevention.",
    description:
      "We support schools in creating clubs where students discuss prevention, organize campaigns, and encourage healthy choices.",
    mission: "To create safe, supportive school environments where drug prevention is embedded in student culture.",
    vision: "Every school in Africa has an active anti-drug club fostering drug-free student communities.",
    activities: [
      "Student-led club meetings",
      "Inter-school debates",
      "Essay and art competitions",
      "Awareness campaigns",
      "Peer education programs",
    ],
    audience: "Primary schools, secondary schools, and universities.",
  },
  {
    id: "counseling",
    title: "Counseling & Support",
    icon: <FaHeart />,
    color: PROGRAM_COLORS.counseling,
    short: "Providing guidance and emotional support for young people.",
    description:
      "Our counseling program helps young people facing peer pressure, addiction challenges, and emotional difficulties.",
    mission: "To provide compassionate, professional support that helps young people overcome challenges and build resilience.",
    vision: "Every young person has access to the emotional support they need to thrive.",
    activities: [
      "Individual counseling sessions",
      "Group therapy discussions",
      "Mental wellness workshops",
      "Support group referrals",
      "Crisis intervention services",
    ],
    audience: "Youth needing guidance and support.",
  },
  {
    id: "community",
    title: "Community Outreach",
    icon: <FaGlobeAfrica />,
    color: PROGRAM_COLORS.community,
    short: "Working with communities to prevent drug abuse.",
    description:
      "We collaborate with families, leaders, and organizations to spread awareness and create safer communities.",
    mission: "To mobilize communities as active partners in the fight against drug abuse.",
    vision: "United, drug-free communities across Africa where every individual thrives.",
    activities: [
      "Community awareness visits",
      "Parent education workshops",
      "Public awareness campaigns",
      "Youth-community dialogues",
      "Stakeholder engagement forums",
    ],
    audience: "Families and community members.",
  },
];

function ProgramModal({ program, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-5"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 12 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="bg-white max-w-2xl w-full rounded-3xl p-8 sm:p-12 relative max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="program-modal-title"
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close program details"
          className="absolute right-5 top-5 w-10 h-10 flex items-center justify-center text-gray-300 hover:text-black transition-colors rounded-full hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
        >
          <FaTimes className="text-lg" aria-hidden="true" />
        </button>

        <div 
          className="w-14 h-14 flex items-center justify-center text-2xl text-white mb-6 rounded-2xl"
          style={{ backgroundColor: program.color }}
        >
          {program.icon}
        </div>

        <h2
          id="program-modal-title"
          className="text-3xl font-bold mb-4 text-gray-900 tracking-tight"
        >
          {program.title}
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed">
          {program.description}
        </p>

        {/* Mission Section */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-3">
            Mission
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {program.mission}
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-3">
            Vision
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {program.vision}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-5">
            Activities
          </h3>
          <ul className="space-y-3">
            {program.activities.map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <span className="text-sm mt-0.5" style={{ color: program.color }} aria-hidden="true">
                  —
                </span>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 mb-2">
            Target Audience
          </h3>
          <p className="text-gray-600 text-sm">{program.audience}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
        
        {/* HERO SECTION WITH HERO.JPEG */}
        <section
          className="relative h-[480px] sm:h-[560px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Young people taking part in community and sports activities"
        >
          {/* Black overlay with opacity */}
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-6xl mx-auto text-center text-white px-6"
          >
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-white/60 mb-4 border border-white/20 px-4 py-1.5 rounded-full">
              Our Impact
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Programs
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-5 max-w-3xl mx-auto text-gray-200 text-lg"
            >
              Empowering young people through education, leadership, support, and community
              action to create a drug-free generation.
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
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight">
              Programs That Create Change
            </h2>
            <p className="max-w-2xl mx-auto mt-5 text-gray-600 leading-relaxed">
              Our programs focus on prevention, awareness, youth empowerment, and community
              support.
            </p>
          </motion.div>
        </section>

        {/* PROGRAM CARDS */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {PROGRAMS.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center text-2xl text-white mb-6 rounded-2xl group-hover:scale-110 transition-all duration-300"
                  style={{ backgroundColor: program.color }}
                  aria-hidden="true"
                >
                  {program.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 tracking-tight">
                  {program.title}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {program.short}
                </p>

                <button
                  onClick={() => setSelectedProgram(program)}
                  className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.1em] uppercase text-gray-700 group-hover:text-black group-hover:gap-4 transition-all duration-300 border-b-2 border-gray-300 pb-1.5 hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-4 rounded-sm"
                  aria-haspopup="dialog"
                >
                  Learn More
                  <FaArrowRight
                    className="text-xs transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MODAL */}
        <AnimatePresence>
          {selectedProgram && (
            <ProgramModal
              program={selectedProgram}
              onClose={() => setSelectedProgram(null)}
            />
          )}
        </AnimatePresence>

        {/* EMBEDDED VISION COMPONENT */}
        <Vision />
        
      </div>
      <Footer />
    </>
  );
}