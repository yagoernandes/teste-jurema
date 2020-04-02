function metodo1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Metodo 1 executado");
      resolve();
    }, 750);
  });
}

function metodo2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Metodo 2 executado");
      resolve();
    }, 1500);
  });
}

function run() {
  // Execução em paralelo
  Promise.all([metodo1(), metodo2()])
    .then(() => {
      console.log("Todos os métodos foram executados!");
    })
    .catch(() => {
      console.log("Erro!");
    });
}

run();
