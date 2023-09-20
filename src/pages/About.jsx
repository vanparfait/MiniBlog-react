import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>A propos</h1>
      <Link to="/">Accueil</Link>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link to="/a-propos/emploi">Emploi</Link>
        <Link to="/a-propos/contact">Contact</Link>
      </div>
      <div>
        {" "}
        <Outlet />{" "}
      </div>
    </div>
  );
};

export default About;
