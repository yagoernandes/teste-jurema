/**
 * Será apresentado
 * 4
 * 4
 * 4
 * 4
 * Pois durante a execução do loop os eventos são criados, mas não executados.
 * Quando o timeout vence e todos os eventos se concretizam a variável já foi acrescida e vale 4.
 */

for (var i = 0; i <= 3; i++) {
  function temp_var(i) {
    console.log(i);
  }
  setTimeout(temp_var, 100, i);
}

/**
 * Passando o parâmetro para setTimeout em tempo de execução seu valor é copiado
 */