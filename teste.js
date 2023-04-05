const Sequelize  = require("sequelize")
const sequelize = new Sequelize('usuarios','root','2297',{
    host: "localhost",
    dialect: "mysql"
})

const postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

postagem.create({
    titulo:"Um titulo Qualquer",
    conteudo:"Um conteudo Qualquer"
})

const usuario = sequelize.define("usuarios",{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    },

        
    

})

usuario.create({
    nome:"pedro",
    sobrenome:"santos",
    idade: 22,
    email: "pedro@teste.com"
})


// usuario.sync({force:true})

