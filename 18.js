const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
  rl.question('Introduce la letra que deseas contar: ', (letra) => {
    // Convertir la letra a minúsculas para hacer la búsqueda sin distinguir entre mayúsculas y minúsculas
    letra = letra.toLowerCase();

    // Contar las veces que aparece la letra en la frase
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
      if (frase[i].toLowerCase() === letra) {
        contador++;
      }
    }

    console.log(`La letra '${letra}' aparece ${contador} veces en la frase.`);
    rl.close();
  });
});
