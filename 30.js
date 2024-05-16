const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para realizar la suma de dos números
function suma(num1, num2) {
  return num1 + num2;
}

// Función para realizar la resta de dos números
function resta(num1, num2) {
  return num1 - num2;
}

// Función para realizar la multiplicación de dos números
function multiplicacion(num1, num2) {
  return num1 * num2;
}

// Función para realizar la división de dos números
function division(num1, num2) {
  return num1 / num2;
}

rl.question('Introduce el primer número: ', (num1) => {
  rl.question('Introduce el segundo número: ', (num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    console.log('Seleccione la operación:');
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicación');
    console.log('4. División');

    rl.question('Opción: ', (opcion) => {
      opcion = parseInt(opcion);

      switch (opcion) {
        case 1:
          console.log(`La suma de ${num1} y ${num2} es:`, suma(num1, num2));
          break;
        case 2:
          console.log(`La resta de ${num1} y ${num2} es:`, resta(num1, num2));
          break;
        case 3:
          console.log(`La multiplicación de ${num1} y ${num2} es:`, multiplicacion(num1, num2));
          break;
        case 4:
          if (num2 === 0) {
            console.log('No se puede dividir por cero.');
          } else {
            console.log(`La división de ${num1} y ${num2} es:`, division(num1, num2));
          }
          break;
        default:
          console.log('Opción no válida.');
          break;
      }

      rl.close();
    });
  });
});
