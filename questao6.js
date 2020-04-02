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

async function run() {
  // Execução em série
  await metodo1();
  await metodo2();
  console.log("Todos os métodos foram executados!");
}

run();
