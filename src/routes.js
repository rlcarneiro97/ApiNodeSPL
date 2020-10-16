const express = require("express")
const routes = express.Router()
const UsuarioController = require("./controllers/UsuarioController")
const LancheController = require("./controllers/LancheController")

//rotas para manipulacao de um usuario
routes.get("/user/show/:id", UsuarioController.show)
routes.post("/user/store/", UsuarioController.store)
routes.put("/user/update/:id", UsuarioController.update)
routes.delete("/user/destroy/:id", UsuarioController.destroy)

//rotas para manipulacao de um lanche
routes.get("/food/index/", LancheController.index)
routes.get("/food/show/:id", LancheController.show)
routes.post("/food/store/", LancheController.store)
routes.put("/food/update/:id", LancheController.update)
routes.delete("/food/destroy/:id", LancheController.destroy)

//exportando rotas para o server.js poder utilizar
module.exports = routes