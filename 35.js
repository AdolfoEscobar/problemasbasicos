// Función para generar un número aleatorio entre min y max (ambos inclusive)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generar matriz de 4x5 con números aleatorios
  const matriz = [];
  for (let i = 0; i < 4; i++) {
    const fila = [];
    for (let j = 0; j < 5; j++) {
      fila.push(generarNumeroAleatorio(1, 100));
    }
    matriz.push(fila);
  }
  
  // Imprimir la matriz
  console.log('Matriz generada:');
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join('\t'));
  }
  