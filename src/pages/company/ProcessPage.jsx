import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { processData } from "@/constants/process/processData.jsx";

const ProcessPage = () => {
  const [progress, setProgress] = useState(10);
  console.log(progress);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let percentage = ((windowHeight - top) / height) * 90;
        percentage = Math.min(Math.max(percentage - 17, 0), 100);
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
        <div
          className="absolute w-2 bg-gray-300 h-[1580px] top-4"
          style={{ borderRadius: "1rem" }}
        ></div>
        <motion.div
          className="absolute w-2 bg-red-500 top-4 max-h-[1580px]"
          style={{ height: `${progress - 1}%`, borderRadius: "1rem" }}
        />
        {processData.map((item, index) => {
          const reached = progress >= index * (100 / 6);
          return (
            <div
              key={index}
              className={`relative z-20 ${index > 0 && "mt-[220px]"}`}
            >
              {reached ? item.hoveredIcon : item.icon}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessPage;
