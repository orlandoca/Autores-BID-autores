import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <div className="container">
      <div className="row">
        <h1 className="row">Favorite authors </h1>
      </div>
      <div className="col align-self-start">
        {location == "/" ? (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => navigate("/author/new")}
          >
            Add an author
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        )}
      </div>
    </div>
  );
}
