import React from "react";
import { useState } from "react";

export default function Resident({ residentDetail }) {
  const [residentData, setResidentData] = useState({
    name: "",
    height: "",
    mass: "",
    gender: "",
  });
  fetch(residentDetail)
    .then((res) => res.json())
    .then((data) => {
      setResidentData({
        name: data.name,
        height: data.height,
        mass: data.mass,
        gender: data.gender,
      });
    });

  return (
    <div className="resident-card">
      <div>
        <span className="bold">Name:</span> {residentData.name}
      </div>
      <div>Height: {residentData.height}</div>
      <div>Mass: {residentData.mass}</div>
      <div>Gender: {residentData.gender}</div>
    </div>
  );
}
