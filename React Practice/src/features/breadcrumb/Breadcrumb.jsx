import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.css";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter((x) => x);

  return (
    <div className="bread__crumb">
      <Link to="/">Home</Link>
      {path.map((name) => {
        return <Link to={`/${name}`}>{" / " + name}</Link>;
      })}
    </div>
  );
};

export default Breadcrumb;
