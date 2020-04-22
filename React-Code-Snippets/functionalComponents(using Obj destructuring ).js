import React, { Component } from "react";
//stateless functional components
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters} 
          {/* no need to add this as its a fucn..and it will add this in the run time
          but the thing you have topass props in the arguments */}
        </span>{" "}
      </a>
    </nav>
  );
};

export default Navbar;
