const express =  require('express')

const app = express()

app.get("/", function(req,res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send(`ola ${req.params.nome} sua profissao é ${req.params.cargo}`)
})


app.listen(8081, function(){
    console.log("Servidor Rodando !!")
})