const Autor_Controller = require("../controllers/autor_controller");

module.exports = (app) => {
  app.get("/api/autor", Autor_Controller.getAllAutor);
  app.post("/api/autor/new", Autor_Controller.createAutor);
  app.get("/api/autor/:id", Autor_Controller.getAutor);
  app.put("/api/autor/update/:id", Autor_Controller.updateAutor);
  app.delete("/api/autor/:id", Autor_Controller.deleteAutor);
};
