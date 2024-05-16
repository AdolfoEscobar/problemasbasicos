const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el primer número: ', (primero) => {
  rl.question('Introduce el segundo número (debe ser mayor o igual que el primero): ', (segundo) => {
    // Convertir las entradas del usuario a números enteros
    const num1 = parseInt(primero);
    const num2 = parseInt(segundo);

    // Verificar si el segundo número es mayor o igual que el primero
    if (num2 < num1) {
      console.log('El segundo número debe ser mayor o igual que el primero.');
      rl.close();
      return;
    }

    // Variables para contar y sumar múltiplos de 2
    let contador = 0;
    let suma = 0;

    console.log('Múltiplos de 2 entre', num1, 'y', num2, ':');

    // Iterar desde el primer número hasta el segundo número
    for (let i = num1; i <= num2; i++) {
      // Verificar si el número actual es un múltiplo de 2
      if (i % 2 === 0) {
        console.log(i); // Imprimir el múltiplo de 2
        contador++; // Incrementar el contador de múltiplos de 2
        suma += i; // Sumar el múltiplo de 2 a la suma total
      }
    }

    // Mostrar el total de múltiplos de 2 encontrados, y la suma de ellos
    console.log('Total de múltiplos de 2:', contador);
    console.log('Suma de múltiplos de 2:', suma);

    rl.close();
  });
});

