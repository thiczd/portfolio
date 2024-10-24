import Project from "./Project";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import Skills from "./Skills";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />\
        <Route path="/portfolio/skills" element={<Skills />} />
        <Route path="/portfolio/project" element={<Project />} />
        <Route path="/portfolio/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
