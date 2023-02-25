import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function AuthorComp() {
  const { id } = useParams();
  const [data, setData] = useState({});

  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:8000/api/autor`);
      setAuthors(response.data);
    };

    getData();
  }, []);

  function deleteAuthor(id) {
    axios
      .delete(`http://localhost:8000/api/autor/${id}`)
      .then((res) => {
        setData(res.data);
        setAuthors(authors.filter((item) => item._id !== id));
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <div className="row">
        <h6 className="col" style={{ color: "BlueViolet" }}>
          We have quotes by:
        </h6>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author, index) => (
              <tr key={index}>
                <td>{author.nombre}</td>
                <td>
                  <Link
                    className="btn btn-secondary"
                    to={`/author/edit/${author._id}`}
                  >
                    {" "}
                    Edit
                  </Link>
                  &nbsp; &nbsp;
                  <button
                    onClick={(e) => deleteAuthor(author._id, e)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
