import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from '../hoc';
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-fuchsia-900 via-black to-rose-900 p-[1px] rounded-[150px] shadow-card'
      
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        In a world evolving towards a technological revolution accompanied by digitization,
        my mark is to use my passion for technology to be a positive part of it after working
        in various fields such banking, connecting with people, I improved my social skills,
        concern for others, and my ability to motivate the team to achieve our goals. 
        I chose the Full Stack Web & App Engineer career path after I saw it fit my mindset and ambition,
        my analytical skills to co-create products and services and deliver them to people 
        to be a supportive part of their lives give me great motivation . 
        During the training at the WBS Coding School Bootcamp, I got acquainted with advanced technologies:
        - html/css - javascript -tailwind CSS/bootstrap - reaction - nosql, mongodb, postgresql
        deepened knowledge in coty Group and Individual Projects. projects Completed, among others: - Application full-stack with Node.js/React and SQL - CSS of the wind back - Frontend project using React and JavaScript.
        I am excited about the opportunity to work with experienced professionals and learn from their expertise.
        I am motivated to constantly acquire new skills and knowledge as a web and application developer.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");





