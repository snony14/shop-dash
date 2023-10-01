import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./root.css";

function Root() {
  return (
    <div className="root">
      <div className="navbar">
        <div>Shop Dash</div>
        <nav>
          <Link to={`products`}>Products</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
