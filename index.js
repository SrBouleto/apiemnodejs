const express = require("express");
const routerProdutos = require("./router");
const path = require("path");
const { connect } = require("./db");
const Produtos = require('./produtos');

const app = express();
app.use("/produtos", routerProdutos);

connect();

app.use(express.json());

console.log(path.join(__dirname, "public"));
//disponibiliza a rota raiz
app.use("/", express.static(path.join(__dirname, "public")));

const PORT = 3000;
// liga o servidor, definindo o nome da porta
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
