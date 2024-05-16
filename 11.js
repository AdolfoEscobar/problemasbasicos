const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (limite) => {
  // Convertir la entrada del usuario a un número entero
  limite = parseInt(limite);

  // Variable para contar los múltiplos de 3
  let contador = 0;

  // Iterar desde 1 hasta el número introducido por el usuario
  for (let i = 1; i <= limite; i++) {
    // Verificar si el número actual es un múltiplo de 3
    if (i % 3 === 0) {
      // Imprimir el múltiplo de 3 encontrado
      console.log('Múltiplo de 3:', i);
      // Incrementar el contador de múltiplos de 3
      contador++;
    }
  }

  // Mostrar el total de múltiplos de 3 encontrados
  console.log('Total de múltiplos de 3 encontrados:', contador);

  rl.close();
});
