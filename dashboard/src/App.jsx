import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(false);
  const Toggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleSizeNav = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleSizeNav);
    return () => {
      window.removeEventListener("resize", handleSizeNav);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="d-flex">
        <div className={toggle ? "d-none" : "w-auto position-fixed"}>
          <Sidebar />
        </div>
        <div className={toggle ? "d-none" : "invisible"}>
          <Sidebar />
        </div>
        <div className="col overflow-auto">
          <Navbar Toggle={Toggle} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route></Route>
          <Route></Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
