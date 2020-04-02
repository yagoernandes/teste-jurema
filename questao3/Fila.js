const fetch = require("cross-fetch");

class FilaEstados {
  constructor(itens) {
    this.itens = itens.map(estado => estado.sigla);
    this.resolvidos = [];
  }

  adiciona(element) {
    this.itens.push(element);
  }

  removePrimeiro() {
    if (this.estaVazio()) return null;
    return this.itens.shift();
  }

  proximo() {
    if (this.estaVazio()) return null;
    return this.itens[0];
  }

  estaVazio() {
    return this.itens.length == 0;
  }

  async executaTodos() {
    const resolvidos = [];
    while (!this.estaVazio()) {
      const estado = await (
        await fetch(`http://localhost:3002/populacao/${this.proximo()}`)
      ).json();
      resolvidos.push(estado);
      this.removePrimeiro();
    }
    return resolvidos;
  }
}

module.exports = FilaEstados;
