const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;

// Función recursiva para solicitar frases al usuario
function solicitarFrase() {
  rl.question('Introduce una frase (o escribe "fin" para terminar): ', (frase) => {
    if (frase.toLowerCase() === 'fin') {
      // Si el usuario escribe "fin", mostramos el total de frases introducidas
      console.log('Total de frases introducidas:', contador);
      rl.close();
    } else {
      // Si el usuario introduce una frase, incrementamos el contador y solicitamos la siguiente frase
      contador++;
      solicitarFrase();
    }
  });
}

// Comenzamos solicitando la primera frase
solicitarFrase();
