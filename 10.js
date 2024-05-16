const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
  // Convertir la entrada del usuario a un número entero
  numero = parseInt(numero);

  // Verificar si el número es par o impar
  if (numero % 2 === 0) {
    console.log('El número introducido es par.');
  } else {
    console.log('El número introducido es impar.');
  }

  rl.close();
});
