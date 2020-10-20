const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UsuarioSchema = new mongoose.Schema({
    
    nome:{
        type: String,
        required: true,
    },
    
    cpf:{
        type: String,
        required: true,
        unique: true,
    },
    
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    
    senha:{
        type: String,
        required: true,
        select: false,
    },

    usuarioTipo:{
        type: String,
        required: true,
        uppercase: true,
    },
    
    createdAt:{
        type: Date,
        default: Date.now,
    },
})

//criando senha criptografada
UsuarioSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash
    next()
})

//criando schema de Usuario
mongoose.model("Usuario", UsuarioSchema)