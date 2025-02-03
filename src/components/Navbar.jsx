import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-3 font-semibold">
      <div>
        <FontAwesomeIcon className="mr-2 text-[#76ABAE]" icon={faArrowRight} />
        About
      </div>
      <div>Experience</div>
      <div>Project</div>
      <div>Article</div>
    </div>
  );
};

export default Navbar;
