import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const buttonVariants = {
  visible: {
    x: [0, -12, 20, -20, 20, 0],
    transition: {
      delay: 2
    }
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    textShadow: "0px 0px 8px rgb(255, 255,255)",
    transition: {
      duration: 0.3,
      yoyo: 10
    }
  }
}

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}
const Home = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container">
      <motion.h2
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate="visible"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;

// whileHover= {{ 
//   scale: 1.1,
//   textShadow: "0px 0px 8px rgb(255, 255,255)",
//   boxShadow: "0px 0px 8px rgb(255,255,255)"
// }}