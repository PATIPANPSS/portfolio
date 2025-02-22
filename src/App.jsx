import { useEffect, useState } from "react";
import "./App.css";
import LeftSection from "./components/Sections/LeftSection";
import RightSection from "./components/Sections/RightSection";

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navBarItems, setNavBarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);

    const elementTitle =
      document.getElementById(sectionId).childNodes[0].textContent;
    // { title: "Article", sectionId: "Article-section" },
    const obj = { title: elementTitle, sectionId: elementId };
    setNavBarItems((prev) => {
      if (prev.findIndex(event => event.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    }, []);
  };
  
  const handleScroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const element = sectionIds[index];
      const elementOffsetTop =  document.getElementById(element).getClientRects()[0].y;
      const height =  document.getElementById(element).getClientRects()[0].height * 0.5;
      const viewHeight = window.innerHeight * 0.3;

      if(elementOffsetTop <= 0) {
        if((elementOffsetTop + height) > viewHeight) {
          setCurrentSection(element)
        }
      } else if(elementOffsetTop > 0 && elementOffsetTop < viewHeight) {
        setCurrentSection(element)
      }
    }
  }

  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [sectionIds])

  return (
    <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection navBarItems={navBarItems} currentSection={currentSection} />
      <RightSection onInitial={addSectionIds} />
    </div>
  );
}

export default App;
