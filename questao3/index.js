var express = require("express");
var app = express();
const PORT = 3003;
const Fila = require("./Fila");
/**
 * A ideia inicial seria de consumir os dados da api do IBGE
 * Ex: https://servicodados.ibge.gov.br/api/v1/localidades/regioes
 *
 * Mas durante os testes feitos em 01/04/2020 (e não é mentira ;D) a API apresentava instabilidades
 * então optei por colocar os dados fixos.
 */
const data = require("./data.json");

app.get("/estados", async (req, res) => {
  const fila = new Fila(Object.values(data.estados));
  const resultado = await fila.executaTodos();
  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`Api de estados escutando na porta ${PORT}`);
});
