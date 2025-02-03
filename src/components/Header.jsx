import React from "react";
import Patipan_Resume from '../assets/Patipan_Resume.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl text-[#76ABAE] font-semibold">
        Patipan Phaiseesuk
      </div>
      <div className="text-[#367579] font-semibold">Front-End</div>
      <div className="text-sm w-5/6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        obcaecati autem, magnam at libero animi!
      </div>
      <div className="mt-4">
        <a href={Patipan_Resume} target="_blank">
          <span className="rounded-md bg-[#76ABAE] text-[#EEEEEE] py-2 px-4">
            View Resume
            <span className="rotate-90 inline-block ml-2 text-sm">
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
