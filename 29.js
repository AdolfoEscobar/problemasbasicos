function tirarDados() {
    // Generar un número aleatorio entre 1 y 6 para cada dado
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
  
    // Calcular la suma de los dos dados
    const suma = dado1 + dado2;
  
    return suma;
  }
  
  // Contador para almacenar la cantidad de veces que la suma de los dados es igual a 10
  let contador = 0;
  
  // Simular cien tiradas de dados
  for (let i = 0; i < 100; i++) {
    const sumaDados = tirarDados();
    if (sumaDados === 10) {
      contador++;
    }
  }
  
  console.log('Cantidad de veces que la suma de los dados es igual a 10:', contador);
  