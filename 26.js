const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
  // Obtener el ancho de la terminal
  const anchoTerminal = process.stdout.columns;

  // Calcular la cantidad de espacios en blanco necesarios para centrar la frase
  const espaciosCentrales = Math.floor((anchoTerminal - frase.length) / 2);

  // Imprimir los espacios en blanco seguidos de la frase
  console.log(' '.repeat(espaciosCentrales) + frase);

  rl.close();
});

