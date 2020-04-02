var express = require("express");
var app = express();
const PORT = 3001;
/**
 * A ideia inicial seria de consumir os dados da api do IBGE
 * Ex: https://servicodados.ibge.gov.br/api/v1/localidades/regioes
 *
 * Mas durante os testes feitos em 01/04/2020 (e não é mentira) a API apresentava instabilidades
 * então optei por colocar os dados fixos.
 */
const data = require("./data.json");

app.get("/estados", (req, res) => {
  res.json({ estados: Object.values(data.estados) });
});

app.listen(PORT, () => {
  console.log(`Api de estados escutando na porta ${PORT}`);
});
