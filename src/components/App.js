import React from "react";

import Home from "/home/reagan/Desktop/PHASE -2/react-hooks-import-export-lab/src/components/Home.js";
import About from "/home/reagan/Desktop/PHASE -2/react-hooks-import-export-lab/src/components/About.js";
import NavBar from "/home/reagan/Desktop/PHASE -2/react-hooks-import-export-lab/src/components/NavBar.js";

// Use the components in your return() JSX

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
