const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")
const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = {

    login(req, res, next){
        if (req.body.nome === "Rafael" && req.body.senha === "lalala"){
            const id = 1
            var token = jwt.sign({id}, process.env.SECRET, {expiresIn: "1h"})
            return res.json({auth: true, token: token})
        }
        res.status(500).json({message: "Login invalido!"})
    },

    logout(req, res, next){
        res.json({auth:false, token: null})
    },

    verificaJWT(req, res, next){
        var token = req.headers["x-access-token"]
        if(!token)
            return res.status(401).json({auth: false, message: "Token nao disponível!"})
        
        jwt.verify(token, process.env.SECRET, function(err, decoded){
            if(err)
                return res.status(500).json({auth: false, message: "Falha ao autenticar token"})
            
            req.userId = decoded.id
            next()
        })
    }
    
}