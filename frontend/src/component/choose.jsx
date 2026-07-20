import React from "react";
import {
  FaBookOpen,
  FaUsers,
  FaBullhorn,
  FaHandsHelping,
} from "react-icons/fa";

const process = [
  {
    icon: <FaBookOpen />,
    title: "Education & Awareness",
    description:
      "We educate young people about the dangers of drug abuse and help them make informed decisions for a healthier future.",
  },
  {
    icon: <FaUsers />,
    title: "Youth Engagement",
    description:
      "We create safe spaces where young people can share experiences, build confidence, and support each other.",
  },
  {
    icon: <FaBullhorn />,
    title: "Community Campaigns",
    description:
      "We organize awareness campaigns in schools and communities to spread the message of living drug-free.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Support & Guidance",
    description:
      "We provide support, mentorship, and guidance to help affected individuals overcome challenges.",
  },
];

export default function Choose() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
          ">
            Our Process To Prevent Drug Abuse
            
          </h2>

          <p className="
            mt-5
            text-gray-600
            text-lg
          ">
            We empower young people through education, awareness,
            and community support to create a safer and healthier generation.
          </p>

        </div>



        {/* Process Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        ">

          {process.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-8
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                hover:-translate-y-2
              "
            >

              {/* Icon */}
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
                {item.icon}
              </div>


              <h3 className="
                text-xl
                font-bold
                text-gray-900
                mb-3
              ">
                {item.title}
              </h3>


              <p className="
                text-gray-600
                leading-relaxed
              ">
                {item.description}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}