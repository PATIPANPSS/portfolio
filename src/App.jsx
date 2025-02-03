import "./App.css";
import LeftSection from "./components/Sections/LeftSection";
import RightSection from "./components/Sections/RightSection";

function App() {
  return (
    <div className="mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default App;
