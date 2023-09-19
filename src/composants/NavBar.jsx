//import React from 'react';

import { Link } from "react-router-dom";

const NavBar = ({ nombreLike }) => {
  return (
    <div className="entete">
      <Link to="/a-propos">A-propos</Link>
      <Link to="/blog">Visitez le blog</Link>
      <h3>Les posts Likes sont :{nombreLike} </h3>
    </div>
  );
};

export default NavBar;
