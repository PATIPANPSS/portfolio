import { useEffect, useState } from "react";
import "./App.css";
import LeftSection from "./components/Sections/LeftSection";
import RightSection from "./components/Sections/RightSection";

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navBarItems, setNavBarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  const addSectionIds = (sectionId) => {
    console.log(sectionIds);
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

  useEffect(() => {
    if (sectionIds.length > 0) {
      console.log(sectionIds[0])
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds]);

  return (
    <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection navBarItems={navBarItems} currentSection={currentSection} />
      <RightSection onInitial={addSectionIds} />
    </div>
  );
}

export default App;
