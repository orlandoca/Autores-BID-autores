const mongoose = require("mongoose");
const AutorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      minlength: [3, "El minimo es de 3 caracteres"],
    },
  },
  { timestamps: true }
);

module.exports.Autor = mongoose.model("Autor", AutorSchema);
