const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para comprobar si un número es primo
function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// Función para calcular el factorial de un número
function factorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

rl.question('Introduce un número: ', (numero) => {
  numero = parseInt(numero);

  console.log('Seleccione la operación:');
  console.log('1. Comprobar si es primo');
  console.log('2. Hallar su factorial');
  console.log('3. Imprimir su tabla de multiplicar');

  rl.question('Opción: ', (opcion) => {
    opcion = parseInt(opcion);

    switch (opcion) {
      case 1:
        if (esPrimo(numero)) {
          console.log(`${numero} es primo.`);
        } else {
          console.log(`${numero} no es primo.`);
        }
        break;
      case 2:
        console.log(`El factorial de ${numero} es:`, factorial(numero));
        break;
      case 3:
        console.log(`Tabla de multiplicar de ${numero}:`);
        for (let i = 1; i <= 10; i++) {
          console.log(`${numero} x ${i} = ${numero * i}`);
        }
        break;
      default:
        console.log('Opción no válida.');
        break;
    }

    rl.close();
  });
});
