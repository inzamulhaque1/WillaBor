/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import logo from "../../assets/logo/logob.png";
import ukryta from "../../assets/icons/ukryta.png";
import tree from "../../assets/icons/tree.png";
import log from "../../assets/icons/b1.png";
import b from "../../assets/icons/b.png";

const AboutUs = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="w-11/12 sm:w-8/12 mx-auto mt-10 md:mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8">
        <div className="">
          <motion.div 
            variants={item}
            className="flex gap-2 sm:gap-4 h-8 sm:h-10 m-1 sm:m-2"
          >
            <img src={logo} alt="Logo" className="h-full" />
            <img src={ukryta} alt="Ukryta" className="h-full" />
          </motion.div>
          
          <motion.p 
            variants={item}
            className="w-full sm:w-9/12 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Choć znajduje się w samym sercu Zakopanego, Willa Bór zapewnia
            wyjątkową ciszę i prywatność. Otoczona zielenią, daje wytchnienie po
            dniu pełnym wrażeń. Idealne miejsce na wypoczynek – blisko Krupówek,
            górskich szlaków i najlepszych restauracji, ale bez tłumów i hałasu.
          </motion.p>
        </div>

        <motion.div 
          variants={item}
          className="md:flex hidden p-4 sm:p-6 md:p-8 lg:p-10 relative"
        >
          <motion.img 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="-mr-20"
            src={tree} 
            alt="Tree" 
          />
          <div className="flex w-44 md:w-fit">
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mr-2 sm:mr-5" 
              src={log} 
              alt="Log" 
            />
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              src={b} 
              alt="B" 
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;