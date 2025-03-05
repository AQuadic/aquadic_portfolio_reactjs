import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const AnimateOnScroll = ({
  inView,
  delay = 0,
  direction = "bottomToTop",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Define the initial and animate positions based on the direction
  const getInitialAndAnimate = () => {
    switch (direction) {
      case "leftToRight":
        return {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
        };
      case "rightToLeft":
        return {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
        };
      case "topToBottom":
        return {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
        };
      case "bottomToTop":
      default:
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        };
    }
  };

  const { initial, animate } = getInitialAndAnimate();

  return (
    <motion.div
      animate={isVisible ? animate : {}}
      initial={initial}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
