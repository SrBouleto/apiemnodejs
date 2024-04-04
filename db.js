const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://rzilkzyc:MpE5nBeCXRektd6stqcJ1gzGNwcbbSZt@isabelle.db.elephantsql.com/rzilkzyc');

async function connect(){
try {
 await sequelize.authenticate();
 console.log('Banco de dados conectado com sucesso');
} catch (err){
  console.error('Não foi possivel conectar ao Banco de dados', err);
}
}

module.exports ={
  sequelize, 
  connect
}