import React from "react";
import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import "./root.css";

function Root() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/products");
    }
  }, [navigate, location]);

  return (
    <div className="root">
      <div className="navbar">
        <h2>Shop Dash</h2>
        <Link to={`products`}>Products</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
