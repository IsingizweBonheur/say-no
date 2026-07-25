import React from "react";
import { motion } from "framer-motion";

export default function Leader() {

  const leaders = [
    {
      name: "DUSENGIMANA Elie",
      title: "Executive Director",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      description:
        "Leads the organization with a strong vision of creating healthier, drug-free communities through education, prevention, and collaboration.",
    },
    {
      name: "Sarah Williams",
      title: "Program Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      description:
        "Coordinates community programs, awareness campaigns, and educational activities designed to prevent drug abuse among young people.",
    },
 {
  name: "DUSHIME ISINGIZWE Bonheur",
  title: "IT Director",
  image: "https://randomuser.me/api/portraits/men/41.jpg",
  description:
    "Leads the organization's technology initiatives by managing digital solutions, maintaining IT systems, and supporting innovative tools that improve awareness, communication, and community impact.",
},
    {
      name: "Grace Johnson",
      title: "Counseling Coordinator",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      description:
        "Provides guidance and support programs that help individuals and families overcome challenges related to drug abuse.",
    },
    {
      name: "David Wilson",
      title: "Youth Engagement Officer",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      description:
        "Works with young people by creating empowerment programs that encourage healthy choices and responsible lifestyles.",
    },
    {
      name: "Emily Anderson",
      title: "Communication Officer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      description:
        "Manages communication strategies and awareness campaigns to spread important messages about drug prevention.",
    },
    {
      name: "Robert Martin",
      title: "Research & Development Officer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      description:
        "Researches community needs and develops effective solutions to improve prevention and education programs.",
    },
    {
      name: "Linda Taylor",
      title: "Volunteer Coordinator",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      description:
        "Coordinates volunteers and ensures community members actively participate in building a drug-free society.",
    },
  ];


  return (

    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">


        {/* Section Header */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          className="text-center max-w-3xl mx-auto mb-16"

        >

          <span className="
            text-green-600
            uppercase
            tracking-widest
            font-semibold
            text-sm
          ">
            Our Leadership
          </span>


          <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-900
            mt-4
          ">
            Meet Our Leadership
          </h2>


          <p className="
            text-gray-600
            mt-5
            leading-7
          ">
            Our dedicated leaders work together to create awareness,
            support communities, and inspire positive actions toward
            a drug-free future.
          </p>


        </motion.div>




        {/* Leadership Cards */}

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        ">


          {leaders.map((leader,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:50
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index * 0.1
              }}

              whileHover={{
                y:-10
              }}

              className="
                bg-white
                rounded-3xl
                p-8
                text-center
                border
                border-gray-100
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
              "

            >


              {/* Profile Image */}

              <div className="
                flex
                justify-center
                mb-6
              ">

                <div className="
                  w-32
                  h-32
                  rounded-full
                  overflow-hidden
                  border-4
                  border-green-100
                  shadow-lg
                ">

                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-110
                      transition
                      duration-500
                    "
                  />

                </div>

              </div>




              {/* Name */}

              <h3 className="
                text-xl
                font-bold
                text-gray-900
              ">
                {leader.name}
              </h3>



              {/* Role */}

              <p className="
                text-green-600
                font-semibold
                text-sm
                mt-2
                mb-4
              ">
                {leader.title}
              </p>




              {/* Description */}

              <p className="
                text-gray-600
                text-sm
                leading-6
              ">
                {leader.description}
              </p>



            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}