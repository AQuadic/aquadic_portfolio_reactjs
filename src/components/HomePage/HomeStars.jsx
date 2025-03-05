import React from "react";
import BigStar from "@/components/icons/home/BigStar.jsx";
import SmallStar from "@/components/icons/home/SmallStar.jsx";

const HomeStars = () => {
  return (
    <div>
      <span className="absolute -top-20 right-4">
        <BigStar />
      </span>
      <span className="absolute top-20 right-20">
        <SmallStar />
      </span>
      <span className="absolute top-32 left-20">
        <SmallStar />
      </span>
      <span className="absolute bottom-16 left-4">
        <BigStar />
      </span>
    </div>
  );
};

export default HomeStars;
