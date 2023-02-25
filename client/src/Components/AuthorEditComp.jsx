import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function AuthorEditComp() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    async function getData() {
      await axios.get(`http://localhost:8000/api/autor/${id}`).then((res) => {
        reset({
          nombre: res.data.nombre,
        });
      });
    }

    getData();
  }, []);
  //funcion actualizar
  const updateAuthor = (e) => {
    console.log(e);

    axios
      .put(`http://localhost:8000/api/autor/update/${id}`, e)
      .then((res) => console.log(res.data));
    navigate("/"); //use this  instead of history.push
  };

  return (
    <div>
      <div className="container">
        <div className="col-lg-6">
          <h6 className="col" style={{ color: "BlueViolet" }}>
            Edit this Author:
          </h6>
          <form onSubmit={handleSubmit(updateAuthor)}>
            <div>
              <label class="form-label"> Name :</label>
              <input
                className="form-control"
                type="text"
                minLength={"3"}
                {...register("nombre", { required: true })}
              />
              {errors.nombre?.type === "required" && (
                <span>El nombre del autor es nesesario</span>
              )}
            </div>
            <br />
            <button className="btn btn-info" onClick={() => navigate("/")}>
              Cancel
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-info">Edit Author</button>
          </form>
        </div>
      </div>
    </div>
  );
}
