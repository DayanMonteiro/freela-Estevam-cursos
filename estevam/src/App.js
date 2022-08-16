import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { globalCss } from "@stitches/react";

const Home = lazy(() => import("./pages/home"));

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
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
