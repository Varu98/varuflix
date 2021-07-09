import React, { useEffect, useState } from "react";
import varuflix from "./images/varuflix-logo1.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-purple"}`}>
      <img className="varuflix-logo" src={varuflix} alt="varuflix-logo" />
    </div>
  );
}

export default Nav;
