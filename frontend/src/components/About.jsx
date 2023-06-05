import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[245px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 600,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[15px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  // const services = fetch("http://localhost:5000/services")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // Process the data received from the API
  //     console.log(data);
  //     // Render the data on the frontend
  //   })
  //   .catch((error) => {
  //     console.error("Error loading services:", error);
  //     // Handle the error condition
  //   });
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a Software Engineer and Entrepreneur with a strong passion for
        technology and business. I have experience in full-stack web development
        and proficient in HTML, CSS, JavaScript, React JS, NodeJs, Express Js,
        MongoDB, GitHub, and DSA with Java, Android. I have successfully managed
        business operations, collaborated with teams, and developed optimized
        software products. With expertise in HR administration, MS SQL Server,
        MySQL, and MongoDB, I excels in software product and project management.
        I have completed course certifications in Ethical Hacking, Java, and
        Android Development!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
