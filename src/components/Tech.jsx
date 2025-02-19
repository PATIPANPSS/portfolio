import React from "react";

const Tech = ({ isHighLight, data }) => {
  return (
    <div>
      <div className="flex gap-3 text-sm">
        {data.map((event, index) => (
          <div
            key={`${event}-tect-${index}`}
            className={`bg-[#76ABAE] text-[#367579] px-2 py-1 rounded-md ${
              isHighLight ? "text-[#EEEEEE]" : ""
            } `}
          >
            {event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
