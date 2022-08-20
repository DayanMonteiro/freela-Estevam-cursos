import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { globalCss } from "@stitches/react";

const About = lazy(() => import("./pages/about"));
const Courses = lazy(() => import("./pages/courses"));
const Home = lazy(() => import("./pages/home"));
const MentoringClasses = lazy(() => import("./pages/mentoring-classes"));
const Projects = lazy(() => import("./pages/projects"));

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  html: {
    fontSize: "62.5%",
  },
  "html, body, #root": {
    width: "100%",
    height: "100%",
    backgroundColor: "#283034",
  },
});

function App() {
  globalStyles();
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="courses" element={<Courses />} />
      <Route path="/" element={<Home />} />
      <Route path="mentoring-classes" element={<MentoringClasses />} />
      <Route path="projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
