/**
 * 8) Mostre na tela números de 1 a 100, mas para os números múltiplos de 3
 * mostre a palavra “Fizz”, para os números múltiplos de 5 mostre a palavra
 * “Buzz” e para os números múltiplos de 3 e 5 a palavra “FizzBuzz”.
 */

for (var i = 1; i <= 100; i++) {
  var fizz = i % 3 == 0 ? "Fizz" : "";
  var buzz = i % 5 == 0 ? "Buzz" : "";
  console.log(`${i} ${fizz}${buzz}`);
}
