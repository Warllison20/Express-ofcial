const express = require("express")


const app = express()
const port = 3000

app.get("/", (req, res) => res.end("<h1>Deu Certo</h1>") )

app.listen(port, () => console.log(`Servidor Rodando Na Porta ${port}`))