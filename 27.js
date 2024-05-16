const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número entre 0 y 10: ', (numero) => {
  numero = parseInt(numero);

  if (isNaN(numero) || numero < 0 || numero > 10) {
    console.log('Por favor, introduce un número válido entre 0 y 10.');
    rl.close();
    return;
  }

  console.log(`Tabla de multiplicar del número ${numero}:`);
  for (let i = 0; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }

  rl.close();
});
