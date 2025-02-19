import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Article", sectionId: "Article-section" },
];

const Navbar = ({ navBarItems, currentSection }) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const handleClick = (sectionId) => {
    console.log(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  console.log(currentSection);
  return (
    <div className="flex flex-col font-semibold mt-5">
      {navBarItems.map((event, item) => (
        <div
          key={`${event}-nav-${item}`}
          onClick={() => handleClick(event.sectionId)}
          onMouseEnter={() => setIsMouseEnter({ [event.title]: true })}
          onMouseLeave={() => setIsMouseEnter({ [event.title]: false })}
          className="cursor-pointer flex py-2"
        >
          <div>
            <FontAwesomeIcon
              // className="new-arrow"
              // มันไม่hiddenให้
              className={`mr-2 new-arrow 
                ${currentSection === event.sectionId ? 'text-[#367579]' : isMouseEnter[event.title] ? "#76ABAE" : "!hidden"}`}

              icon={faArrowRight}
              // ใช้styleแทนโค้ดด้านบนที่ไม่hidden
              // style={{
              //   display:
              //   currentSection === event.sectionId ||
              //     isMouseEnter[event.title]
              //       ? "inline"
              //       : "none",
              //   color:
              //   currentSection === event.sectionId ||
              //     isMouseEnter[event.title]
              //       ? "#367579"
              //       : "#76ABAE",
              // }}
            />
          </div>

          <div
            className={`${
              currentSection === event.sectionId || isMouseEnter[event.title]
                ? "translate-x-3"
                : ""
            } duration-500 ease-out `}
          >
            {event.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
