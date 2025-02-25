import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { data } from "../contents/header";

const Header = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl text-[#76ABAE] font-semibold">{data.name}</div>
      <div className="text-[#367579] font-semibold">{data.title}</div>
      <div className="text-sm w-5/6">{data.caption}</div>
      <div className="mt-4">
        <a href={data.link} target="_blank">
          <span className="rounded-md bg-[#76ABAE] text-[#EEEEEE] py-2 px-4">
            {data.btnText}
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
