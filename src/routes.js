const express = require("express")
const routes = express.Router()
const UsuarioController = require("./controllers/UsuarioController")
const LancheController = require("./controllers/LancheController")
const PedidoController = require("./controllers/PedidoController")
const AuthLogin = require("../middlewares/authLogin")

routes.get("/", function(req, res){ res.send("Api Node SPL V1") })
routes.post("/login/", AuthLogin.login)
routes.post("/logout/", AuthLogin.logout)

//rotas para manipulacao de um usuario
// routes.get("/user/index/", UsuarioController.index) //para testes
routes.get("/user/show/:id", UsuarioController.show)
routes.post("/user/store/", UsuarioController.store)
routes.put("/user/update/:id", UsuarioController.update)
routes.delete("/user/destroy/:id", UsuarioController.destroy)

//rotas para manipulacao de um lanche
routes.get("/food/index/", LancheController.index)
routes.get("/food/show/:id", LancheController.show)
routes.post("/food/store/", AuthLogin.verificaJWT, LancheController.store)
routes.put("/food/update/:id", LancheController.update)
routes.delete("/food/destroy/:id", LancheController.destroy)

//rotas para manipulacao de um pedido
routes.get("/order/index/", PedidoController.index)
routes.get("/order/show/:id", PedidoController.show) //para testes
routes.post("/order/store/", PedidoController.store)
// routes.put("/order/update/:id", PedidoController.update)
routes.delete("/order/destroy/:id", PedidoController.destroy)
routes.delete("/order/clear-complete/", PedidoController.destroyMany)

//exportando rotas para o server.js poder utilizar
module.exports = routes