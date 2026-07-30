import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function Leader() {
  const leaders = [
    {
      name: "DUSENGIMANA Elie",
      image: "https://i.imgur.com/chjZLJC.jpeg",
      short: "D.E",
      role: "President",
      phone: "0791059455",
      description:
        "Leads CLUB ANTI DRUGS YVAN 14 by coordinating activities, partnerships, and strategies to fight drug abuse among youth.",
    },

    {
      name: "DUSHIME ISINGIZWE Bonheur",
      image: "https://i.imgur.com/OjHH8ud.jpeg",
      short: "I.B",
      role: "Vice President",
      phone: "0795926508",
      description:
        "Supports organizational leadership, manages technology initiatives, and helps develop digital solutions for awareness programs.",
    },

    {
      name: "ABAHIRIWE Adorateur",
      short: "A",
      role: "Secretary",
      image: "https://i.imgur.com/OjHH8ud.jpeg",
      phone: "0782020139",
      description:
        "Responsible for documentation, communication, reports, and administrative coordination of club activities.",
    },

    {
      name: "IRADUKUNDA Delicia",
      image: "https://i.imgur.com/TEsXfqW.jpeg",
      short: "I.D",
      role: "Treasurer",
      phone: "0791125282",
      description:
        "Manages financial records and ensures transparency in the use of club resources.",
    },

    {
      name: "Uwizeyimana Vanessa",
      image: "https://i.imgur.com/y2DwArI.jpeg",
      short: "V.U",
      role: "Development Officer",
      phone: "Not Available",
      description:
        "Supports development programs and helps organize activities that empower young people.",
    },

    {
      name: "KAMANA Levis",
      // image: "https://i.imgur.com/ZMSxxSY.jpeg",
      short: "K.L",
      role: "Health and Wellness Coordinator",
      phone: "Not Available",
      description:
        "Promotes the health and well-being of members by coordinating health initiatives, raising awareness, and supporting programs that improve community wellness.",
    },

    {
      name: "YOBOKA Gad",
      image: "https://i.imgur.com/7TwV7VR.jpeg",
      short: "Y.G",
      role: "Community Representative",
      phone: "0780651037",
      description:
        "Participates in community outreach and awareness campaigns against drug abuse.",
    },

    {
      name: "MUGWANEZA Fabrice",
      image: "https://i.imgur.com/5Azmp7D.jpeg",
      short: "M.F",
      role: "Youth Mobilizer",
      phone: "0794012426",
      description:
        "Works with young people and encourages positive choices through education and engagement.",
    },

    {
      name: "MUSONI Jean Bosco",
      image: "https://i.imgur.com/7nKQyBM.jpeg",
      short: "M.B",
      role: "Youth Support Officer",
      phone: "0724716621",
      description:
        "Supports youth activities and contributes to building a drug-free community.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-600 uppercase tracking-widest font-semibold text-sm">
            Our Leadership
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Meet Our Committee
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            The dedicated leadership team of CLUB ANTI DRUGS YVAN 14 working
            together to prevent drug abuse, support youth, and create a
            healthier community.
          </p>
        </motion.div>

        {/* Leaders */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white rounded-3xl p-8 text-center border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6">
                {leader.image ? (
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full rounded-full object-cover border-4 border-green-200 shadow-md"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                ) : null}

                <div
                  className={`${
                    leader.image ? "hidden" : "flex"
                  } w-full h-full rounded-full bg-green-100 text-green-700 items-center justify-center font-extrabold text-2xl border-4 border-green-200`}
                >
                  {leader.short}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-gray-900">
                {leader.name}
              </h3>

              {/* Role */}
              <p className="text-green-600 font-semibold mt-2">
                {leader.role}
              </p>

              {/* Phone */}
              <div className="flex justify-center items-center gap-2 mt-4 text-gray-600 text-sm">
                <FaPhoneAlt className="text-green-600" />
                <span>{leader.phone}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-6 mt-5">
                {leader.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
