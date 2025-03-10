import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { processData } from "@/constants/process/processData.jsx";
import ProcessCard from "@/components/process/ProcessCard.jsx";
import { useTranslation } from "react-i18next";
import "../../components/Hooks/i18n";

const ProcessPage = () => {
  const { t } = useTranslation("process");
  const [progress, setProgress] = useState(10);
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
      <h1 className="text-center text-3xl sm:text-5xl font-semibold mb-12 flex gap-2 rtl:flex-row-reverse">
        {t('company')} <span className="text-brandColor">{t('process')}</span>
      </h1>
      <div className="relative w-10 flex flex-col items-center pb-28">
        <div
          className="absolute w-1 sm:w-2 bg-gray-300  h-[1580px]  top-8 sm:top-4"
          style={{ borderRadius: "1rem" }}
        ></div>
        <motion.div
          className="absolute w-1 sm:w-2 bg-red-500 top-8 sm:top-4 max-h-[1580px]"
          style={{ height: `${progress - 1}%`, borderRadius: "1rem" }}
        />
        {processData.map((item, index) => {
          const reached = progress >= index * (100 / 6);
          return (
            <div
              key={index}
              className={`relative z-20 ${index > 0 && "mt-[220px]"}`}
            >
              <span>{reached ? item.hoveredIcon : item.icon}</span>
              <motion.div
                className={`absolute top-5 sm:top-0 ${index % 2 === 0 ? "right-16 sm:right-24" : "left-16 sm:left-24"}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: reached ? 1 : 0.5, y: reached ? 0 : 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <ProcessCard index={index} name={item.name} body={item.body} />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessPage;
