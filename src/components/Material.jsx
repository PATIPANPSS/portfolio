import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Material = ({ isHighLight, icon, link }) => {
  return (
    <a href={link} target="_blank" className="hover:scale-110">
      <FontAwesomeIcon
        className={`text-[#367579] scale-110 ${
          isHighLight ? "text-[#EEEEEE]" : ""
        }`}
        icon={icon}
      />
    </a>
  );
};

export default Material;
