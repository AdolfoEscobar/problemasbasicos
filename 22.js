const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
  // Imprimir la frase cinco veces, cada vez desplazada cuatro columnas hacia la derecha
  for (let i = 0; i < 5; i++) {
    const espacios = '    '.repeat(i); // Crear una cadena de espacios en blanco según el número de desplazamiento
    console.log(espacios + frase); // Imprimir la frase con el desplazamiento adecuado
  }

  rl.close();
});
