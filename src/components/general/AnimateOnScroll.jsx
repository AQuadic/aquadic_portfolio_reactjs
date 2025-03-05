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

  const getInitialAndAnimate = () => {
    switch (direction) {
      case "leftToRight":
        return {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
        };
      case "rightToLeft":
        return {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
        };
      case "topToBottom":
        return {
          initial: { opacity: 0, y: -100 },
          animate: { opacity: 1, y: 0 },
        };
      case "bottomToTop":
      default:
        return {
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
        };
    }
  };

  const { initial, animate } = getInitialAndAnimate();

  return (
    <motion.div
      className="w-full"
      animate={isVisible ? animate : {}}
      initial={initial}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
