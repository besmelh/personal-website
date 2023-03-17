import React, { useRef, useEffect } from 'react';
import RandomStar from './RandomStar';
import Rellax from 'rellax';
import { motion } from 'framer-motion';

const StaryBackground = (props) => {
  const transition = { duration: 0.5, type: 'spring' };

  //parallex scrolling
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax('.animateRellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  //creating the stars
  let numStars = 200;
  console.log('numStars', numStars);
  var stars = [];
  for (var i = 0; i < numStars; i++) {
    stars.push(<RandomStar key={i} className='animateRellax' />);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      {stars}
    </motion.div>
  );
};

export default StaryBackground;
