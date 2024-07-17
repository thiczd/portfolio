import Project from "./Project";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
//main app
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
