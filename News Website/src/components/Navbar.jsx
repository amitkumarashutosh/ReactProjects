import React from "react";
import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <img src={Logo} className="logo" />
        <h1>News Monkey</h1>
      </nav>
    </>
  );
}
