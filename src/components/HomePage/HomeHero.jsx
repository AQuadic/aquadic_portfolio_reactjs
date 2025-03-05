"use client"; // Ensure this runs on the client side for Next.js

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeLinesIcon from "@/components/icons/home/HomeLinesIcon";
import HomeGradientLeft from "@/components/icons/home/HomeGradientLeft";
import HomeGradientRight from "@/components/icons/home/HomeGradientRight";
import HomeArch from "@/components/icons/home/HomeArch.jsx";
import ArrowRight from "@/components/icons/general/ArrowRight.jsx";

const words = ["Startups", "Businesses", "Agencies"];

const HomeHero = () => {
  const [displayedWord, setDisplayedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  // Scroll animation hooks
  const { scrollYProgress } = useScroll();
  const archY = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves HomeArch upwards on scroll

  useEffect(() => {
    let charIndex = 0;
    const word = words[wordIndex];
    const typingInterval = setInterval(() => {
      setDisplayedWord(word.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === word.length) {
        clearInterval(typingInterval);

        setTimeout(() => {
          setDisplayedWord("");
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [wordIndex]);

  return (
    <section className="relative">
      <div className="container relative mt-20">
        <span className="absolute -top-16">
          <HomeLinesIcon className="w-[40px] sm:w-[60px] md:w-[80px]" />
        </span>

        {/* Animated Heading */}
        <motion.h1
          className="text-center font-bold text-4xl sm:text-5xl md:text-[72px] mx-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We help
          <span className="relative text-brandColor ml-2 sm:ml-3 md:ml-4 whitespace-nowrap">
            {displayedWord.split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: i * 0.05 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>{" "}
          in their design & development journey.
        </motion.h1>

        {/* Scroll-Affected HomeArch */}
        <motion.div style={{ y: archY }}>
          <HomeArch />
        </motion.div>

        {/* Animated Description */}
        <motion.p
          className="text-center text-brandGray text-lg sm:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Design and digital product development company. We create beautiful
          and functional web platforms, apps, and custom software solutions.
        </motion.p>
        <button className="mt-8 mx-auto flex items-center justify-center gap-3 bg-brandColor rounded-full px-6 py-3 text-white font-medium border border-brandColor group">
          <span>Get Started</span>{" "}
          <span className="group-hover:translate-x-1 transition-transform">
            <ArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default HomeHero;
