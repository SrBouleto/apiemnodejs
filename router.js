const express = require("express");
const db_produtos = require("./produtos");
const router = express.Router();
//disponibiliza a database base na rota produtos

router.get("/", async (req, res) => {
  const data = await db_produtos.findAll();
  res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const produto = await db_produtos.findByPk(id);
  res.status(200).json(produto);
})

router.post('/', async (req, res) => {
  const { descricao, valor, marca } = req.body;
  const novoProduto = await db_produtos.create({
    descricao,
    valor,
    marca
  })
  res.status(200).json(novoProduto);
})

router.put('/:id', async (req, res) => {
  const { descricao, valor, marca } = req.body;
  const { id } = req.params;
  await db_produtos.update({
    descricao,
    marca,
    valor
  }, {
  where: {id}
  })
    
  const atualizadoProduto = await db_produtos.findByPk(id);
    res.status(200).json(atualizadoProduto);
  
})

router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  await db_produtos.destroy({
    where: {id}
  });
  res.status(200).json({
    message: "Produto deletado com sucesso"
  })
})


module.exports = router;
