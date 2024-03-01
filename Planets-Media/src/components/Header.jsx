import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img src="logo.png" className="header--image" />
      <h2 className="header--title">Planet's Media</h2>
      <div className="header--items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
