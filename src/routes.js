const express = require("express")
const routes = express.Router()
const AuthController = require("./controllers/authController")
const UsuarioController = require("./controllers/UsuarioController")
const LancheController = require("./controllers/LancheController")
const PedidoController = require("./controllers/PedidoController")
const authMiddleware = require("../middlewares/auth")

routes.get("/", function(req, res){ res.send("Api Node SPL V1") })

routes.post("/authenticate/", AuthController.auth)

//rotas para manipulacao de um usuario
routes.get("/user/show/:id", authMiddleware, UsuarioController.show)
routes.post("/user/store/", UsuarioController.store)
routes.put("/user/update/:id", UsuarioController.update)
routes.delete("/user/destroy/:id", UsuarioController.destroy)

//rotas para manipulacao de um lanche
routes.get("/food/index/", LancheController.index)
routes.get("/food/show/:id", LancheController.show)
routes.post("/food/store/", LancheController.store)
routes.put("/food/update/:id", LancheController.update)
routes.delete("/food/destroy/:id", LancheController.destroy)

//rotas para manipulacao de um pedido
routes.get("/order/index/", PedidoController.index)
routes.get("/order/show/:id", PedidoController.show) //para testes
routes.post("/order/store/", PedidoController.store)
routes.delete("/order/destroy/:id", PedidoController.destroy)
routes.delete("/order/clear-complete/", PedidoController.destroyMany)

//exportando rotas para o server.js poder utilizar
module.exports = routes