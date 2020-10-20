const mongoose = require("mongoose")
const Usuario = mongoose.model("Usuario")

module.exports = {

    //mostra um usuario em especifico
    async show(req, res){
        const user = await Usuario.findById(req.params.id)
        return res.json(user)
    },

    //cria um novo usuario
    async store(req, res){
        const {email} = req.body
        
        try {
            if(await Usuario.findOne({email}) ){
                return res.status(400).send({error: "Usuário já existe"})
            } 
        
            const user = await Usuario.create(req.body)
            user.senha = undefined
            return res.send(user)

        } catch (error) {
            return res.status(400).send({error: "Falha no cadastro"})
        }
    },

    //atualiza um usuario existente
    async update(req, res){
        const user = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(user)
    },

    //deleta um usuario
    async destroy(req, res){
        await Usuario.findByIdAndRemove(req.params.id)
        return res.send()
    }
}