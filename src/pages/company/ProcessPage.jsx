import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ProcessPage = () => {
  const [progress, setProgress] = useState(7);
  console.log(progress);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let percentage = ((windowHeight - top) / height) * 100;
        percentage = Math.min(Math.max(percentage - 28, 0), 100);
        setProgress(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="container flex flex-col items-center py-20 overflow-hidden"
      ref={containerRef}
    >
      <h1 className="text-center text-3xl sm:text-5xl font-semibold mb-12">
        Company <span className="text-brandColor">Process</span>
      </h1>
      <div className="relative w-10 flex flex-col items-center pb-28">
        <div className="w-8 h-8 rounded-full bg-gray-300 mb-0"></div>
        <div
          className="absolute w-2 bg-gray-300 h-[1520px] top-4"
          style={{ borderRadius: "1rem" }}
        ></div>
        <motion.div
          className="absolute w-2 bg-red-500 top-4 "
          style={{ height: `${progress - 1}%`, borderRadius: "1rem" }}
        />
        {[...Array(5)].map((_, index) => {
          const reached = progress >= (index + 1) * (92 / 6);
          return (
            <motion.div
              key={index}
              className="w-8 h-8 rounded-full border-4 bg-white mt-[220px] flex items-center justify-center"
              animate={{
                backgroundColor: reached ? "#ef4444" : "#ffffff",
                borderColor: reached ? "#ef4444" : "#9ca3af",
              }}
            />
          );
        })}
        <motion.div
          className="w-8 h-8 rounded-full bg-gray-300 mt-[220px]"
          animate={{
            boxShadow: progress >= 90 ? "0px 0px 15px 5px #ef4444" : "none",
          }}
        />
      </div>
    </section>
  );
};

export default ProcessPage;
