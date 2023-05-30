

import React from "react";
import { Routes } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/rogin";
import Main from "./Pages/Main";
function App() {
  
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/main" element={<Main/>}/>
       </Routes>
    </Router>
    </div>
  );
}

export default App;
