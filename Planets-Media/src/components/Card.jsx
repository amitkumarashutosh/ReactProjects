import React from "react";
import { useState } from "react";
import Resident from "./Resident";

export default function Card({
  name,
  population,
  terrain,
  climate,
  residents,
}) {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        {residents.length !== 0 ? <span className="live">Available</span> : ""}
        <div>Climate: {climate}</div>
        <div>Population: {population} </div>
        <div>Terrain: {terrain}</div>
        <div className="btn-div">
          <span className="btn">Residents:</span>
        </div>
        <div className="residents-container">
          {residents.map((item) => {
            return <Resident residentDetail={item} key={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
