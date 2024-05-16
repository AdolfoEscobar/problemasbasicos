const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (numero) => {
  // Convertir la entrada del usuario a un número
  numero = parseFloat(numero);

  // Verificar si el número es positivo, negativo o cero
  if (numero > 0) {
    console.log('El número introducido es positivo.');
  } else if (numero < 0) {
    console.log('El número introducido es negativo.');
  } else {
    console.log('El número introducido es cero.');
  }

  rl.close();
});
