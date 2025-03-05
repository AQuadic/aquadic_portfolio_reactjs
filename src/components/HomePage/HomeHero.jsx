"use client"; // Ensure this runs in the client side for Next.js

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HomeLinesIcon from "@/components/icons/home/HomeLinesIcon";
import HomeGradientLeft from "@/components/icons/home/HomeGradientLeft";
import HomeGradientRight from "@/components/icons/home/HomeGradientRight";

const words = ["Startups", "Businesses", "Agencies"];

const HomeHero = () => {
  const [displayedWord, setDisplayedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

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
      <span className="absolute left-0 max-w-[40%]">
        <HomeGradientLeft />
      </span>
      <span className="absolute right-0 max-w-[40%]">
        <HomeGradientRight />
      </span>
      <div className="container relative mt-20">
        <span className="absolute -top-16">
          <HomeLinesIcon className="w-[40px] sm:w-[60px] md:w-[80px]" />
        </span>
        <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-[72px] mx-10">
          We help
          <span className="relative text-brandColor  ml-2 sm:ml-3 md:ml-4 whitespace-nowrap">
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
        </h1>
      </div>
    </section>
  );
};

export default HomeHero;
