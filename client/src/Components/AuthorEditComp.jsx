import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthorEditComp() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="col-lg-6">
          <h1 className="col" style={{ color: "BlueViolet" }}>
            Edit this Author:
          </h1>
          <form>
            <div>
              <label class="form-label"> Name :</label>
              <input className="form-control" type="text" />
            </div>
            <br />
            <button className="btn btn-info" onClick={() => navigate("/")}>
              Cancel
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
