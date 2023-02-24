import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AuthorForm() {
  const {
    register,
    formState: { erros },
    handleSubmit,
  } = useForm();

  const createAuthor = (e) => {
    console.log(e);
    axios
      .post(`http://localhost:8000/api/autor/new`, e)
      .then((response) => console.log(response.data))
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container border border-primary p-3">
      <div className="col-lg-6">
        <h1 className="col" style={{ color: "BlueViolet" }}>
          Add a new Author:
        </h1>
        <form onSubmit={handleSubmit(createAuthor)}>
          <div>
            <label className="form-label"> Name :</label>
            <input
              className="form-control"
              type="text"
              minLength={"3"}
              {...register("nombre", { required: true })}
            />
          </div>
          <br />
          <button className="btn btn-info">Cancel</button>
          &nbsp; &nbsp;
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}
