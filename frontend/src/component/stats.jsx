import React from "react";
import {
  FaUserGraduate,
  FaUsers,
  FaHandshake,
  FaSchool,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate />,
    number: "25K+",
    title: "Youth Educated",
    description: "Young people empowered through drug awareness and prevention programs.",
  },
  {
    icon: <FaSchool />,
    number: "120+",
    title: "Schools Reached",
    description: "Schools engaged with anti-drug campaigns and educational workshops.",
  },
  {
    icon: <FaUsers />,
    number: "50+",
    title: "Community Programs",
    description: "Community outreach events promoting healthy and drug-free lifestyles.",
  },
  {
    icon: <FaHandshake />,
    number: "30+",
    title: "Partners",
    description: "Organizations and volunteers working together to build safer communities.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Together We Are Making a Difference
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Every campaign, every volunteer, and every student reached
            brings us one step closer to a drug-free generation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-gray-50
                rounded-2xl
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-green-600">
                {item.number}
              </h3>

              <h4 className="mt-3 text-xl font-semibold text-gray-900">
                {item.title}
              </h4>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}