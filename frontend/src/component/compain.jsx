import React from "react";
import {
  FaSchool,
  FaRunning,
  FaComments,
  FaHandsHelping,
} from "react-icons/fa";

const campaigns = [
  {
    icon: <FaSchool />,
    title: "School Awareness",
    description:
      "Educating students about the dangers of drug abuse and encouraging healthy choices.",
  },
  {
    icon: <FaRunning />,
    title: "Youth Activities",
    description:
      "Creating positive activities that inspire young people to stay focused and avoid drugs.",
  },
  {
    icon: <FaComments />,
    title: "Community Awareness",
    description:
      "Working with communities through discussions and awareness programs about prevention.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Support Programs",
    description:
      "Providing guidance and support to people affected by drug abuse.",
  },
];

export default function Campaigns() {
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
            Our Campaigns
          </h2>

          <p className="
            mt-5
            text-gray-600
            text-lg
          ">
            We create awareness campaigns that educate, inspire,
            and empower communities to fight against drug abuse.
          </p>

        </div>



        {/* Campaign Cards */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        ">


          {campaigns.map((campaign, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-8
                shadow-md
                hover:shadow-xl
                transition-all
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
                {campaign.icon}
              </div>



              {/* Title */}
              <h3 className="
                text-xl
                font-bold
                text-gray-900
                mb-3
              ">
                {campaign.title}
              </h3>



              {/* Description */}
              <p className="
                text-gray-600
                leading-relaxed
              ">
                {campaign.description}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}