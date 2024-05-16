const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un número: ', (limite) => {
  // Convertimos el límite introducido a un número entero
  limite = parseInt(limite);

  if (isNaN(limite) || limite <= 0) {
    console.log('Por favor, introduce un número válido mayor que cero.');
    rl.close();
    return;
  }

  console.log('Los números naturales hasta', limite, 'son:');
  for (let i = 1; i <= limite; i++) {
    console.log(i);
  }

  rl.close();
});
