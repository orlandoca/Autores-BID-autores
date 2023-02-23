const { Autor } = require("../models/autor_model");

//METODO LISTAR TODOS
module.exports.getAllAutor = async (request, response) => {
  try {
    const autor = await Autor.find();
    response.json(autor);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//crea un nuevo autor
module.exports.createAutor = async (request, response) => {
  try {
    const autor = await Autor.create(request.body);
    response.json(autor);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};

//METODO CAPTAR POR EL ID
module.exports.getAutor = async (request, response) => {
  try {
    const autor = await Autor.findOne({ _id: request.params.id });
    response.json(autor);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};

//METODO ACTUALIZAR
module.exports.updateAutor = async (request, response) => {
  try {
    const autor = await Autor.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true, runValidators: true }
    );
    response.json(autor);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};

//METODO ELIMINAR
module.exports.deleteAutor = async (request, response) => {
  try {
    const autor = await Autor.deleteOne({ _id: request.params.id });
    response.json(autor);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
