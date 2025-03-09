import React from "react";
import clsx from "clsx";

const ProcessCard = ({ index, title, body }) => {
  return (
    <div
      className={clsx(
        "flex items-center my-4",
        index % 2 === 0 ? "justify-end" : "justify-start",
      )}
    >
      <div className="relative bg-white shadow-lg rounded-lg p-6 max-w-md">
        <h2 className="text-lg font-bold text-red-500">{title}</h2>
        <ul className="mt-2 space-y-2">
          {body.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <span className="text-red-500">▶</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-gray-600">
          And defining project scheduling and cost, we’ve an outline to focus
          on, and move forward. This data is then analyzed to ensure its
          validity.
        </p>
        <div
          className={clsx(
            "absolute top-1/2 w-4 h-4 bg-white transform rotate-45",
            index % 2 === 0 ? "-right-2" : "-left-2",
          )}
        ></div>
      </div>
    </div>
  );
};

export default ProcessCard;
