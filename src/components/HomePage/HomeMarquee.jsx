import React from "react";
import { marqueeImages } from "@/constants/home/marqueeImages.js";
import Marquee from "react-fast-marquee";

const HomeMarquee = () => {
  return (
    <section className="container">
      <Marquee
        className="marquee-shadow py-6 px-3 rounded-[20px]"
        autoFill={true}
      >
        {marqueeImages.map((image) => (
          <img
            src={image}
            alt="Image"
            className="mx-5 sm:mx-[36px] max-sm:w-[50px]"
          />
        ))}
      </Marquee>
    </section>
  );
};

export default HomeMarquee;
