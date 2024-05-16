const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arreglo para almacenar los números introducidos por el usuario
let numeros = [];

rl.question('Introduce el primer número: ', (numero1) => {
  // Agregar el primer número al arreglo y solicitar el segundo número
  numeros.push(parseFloat(numero1));
  solicitarNumero(2);
});

function solicitarNumero(indice) {
  rl.question(`Introduce el ${indice}° número: `, (numero) => {
    // Agregar el número al arreglo
    numeros.push(parseFloat(numero));
    
    if (indice < 5) {
      // Si aún no se han introducido 5 números, solicitar el siguiente número
      solicitarNumero(indice + 1);
    } else {
      // Una vez que se hayan introducido los 5 números, encontrar el mayor y el menor
      const mayor = Math.max(...numeros);
      const menor = Math.min(...numeros);

      console.log('El mayor número es:', mayor);
      console.log('El menor número es:', menor);

      rl.close();
    }
  });
}

