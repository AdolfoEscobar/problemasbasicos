const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

function solicitarNumero() {
  rl.question('Introduce el primer número: ', (numero1) => {
    numeros.push(parseInt(numero1));
    rl.question('Introduce el segundo número: ', (numero2) => {
      numeros.push(parseInt(numero2));

      // Ordenar los números de menor a mayor
      numeros.sort((a, b) => a - b);

      // Imprimir los números naturales entre los dos números
      console.log('Números naturales entre', numeros[0], 'y', numeros[1], ':');
      let contador = 0;
      let contadorPares = 0;
      let sumaImpares = 0;
      for (let i = numeros[0]; i <= numeros[1]; i++) {
        console.log(i);
        contador++;
        if (i % 2 === 0) {
          contadorPares++;
        } else {
          sumaImpares += i;
        }
      }

      console.log('Total de números naturales:', contador);
      console.log('Cantidad de números pares:', contadorPares);
      console.log('Suma de números impares:', sumaImpares);

      rl.close();
    });
  });
}

solicitarNumero();
