// Función para generar un número aleatorio entre min y max (ambos inclusive)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generar la matriz original de 4x5 con números aleatorios
  const matrizOriginal = [];
  for (let i = 0; i < 4; i++) {
    const fila = [];
    for (let j = 0; j < 5; j++) {
      fila.push(generarNumeroAleatorio(1, 100));
    }
    matrizOriginal.push(fila);
  }
  
  // Imprimir la matriz original
  console.log('Matriz original:');
  for (let i = 0; i < matrizOriginal.length; i++) {
    console.log(matrizOriginal[i].join('\t'));
  }
  
  // Calcular la matriz transpuesta
  const matrizTranspuesta = [];
  for (let i = 0; i < matrizOriginal[0].length; i++) {
    const filaTranspuesta = [];
    for (let j = 0; j < matrizOriginal.length; j++) {
      filaTranspuesta.push(matrizOriginal[j][i]);
    }
    matrizTranspuesta.push(filaTranspuesta);
  }
  
  // Imprimir la matriz transpuesta
  console.log('\nMatriz transpuesta:');
  for (let i = 0; i < matrizTranspuesta.length; i++) {
    console.log(matrizTranspuesta[i].join('\t'));
  }
  