import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="flex items-end text-2xl">
      <div>
        <FontAwesomeIcon
          className="hover:scale-125 transition-all"
          icon={faGithub}
        />
      </div>
    </div>
  );
};

export default Contact;
