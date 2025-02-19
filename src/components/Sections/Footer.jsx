import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-end">
        <span>
          Powered by React.js and Tailwind
          <a href="https://github.com/PATIPANPSS">
            <FontAwesomeIcon className='ml-2 text-2xl' icon={faGithub} /></a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
