import React from "react";
import { useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function AuthorComp() {
  const { id } = useParams();
  const [data, setData] = useState({});

  function deletePet() {
    axios
      .delete(`http://localhost:8000/api/autor/${id}`)
      .then((res) => setData(res.data));
    navigate("/");
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="col" style={{ color: "BlueViolet" }}>
          We have quotes by:
        </h1>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bill Bryson</td>
              <td>
                {" "}
                <Link className="btn btn-primary" to={`/author/edit/`}>
                  {" "}
                  Edit
                </Link>
                &nbsp; &nbsp;
                <Link className="btn btn-secondary" to="/">
                  Delete
                </Link>
              </td>
            </tr>
            <tr>
              <td>Ada Lovelace</td>
              <td>
                {" "}
                <Link className="btn btn-primary" to="/">
                  {" "}
                  Edit
                </Link>
                &nbsp; &nbsp;
                <Link className="btn btn-secondary" to="/">
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
