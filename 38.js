// Función para ordenar una matriz por la primera columna utilizando el método Shell
function ordenarMatrizPorPrimeraColumna(matriz) {
    const filas = matriz.length;
    
    // Calcular la brecha inicial
    let brecha = Math.floor(filas / 2);
    
    // Aplicar el método Shell
    while (brecha > 0) {
      for (let i = brecha; i < filas; i++) {
        const temp = matriz[i];
        let j = i;
        while (j >= brecha && matriz[j - brecha][0] > temp[0]) {
          matriz[j] = matriz[j - brecha];
          j -= brecha;
        }
        matriz[j] = temp;
      }
      brecha = Math.floor(brecha / 2);
    }
  }
  
  // Ejemplo de matriz desordenada
  const matrizDesordenada = [
    [5, 3, 7],
    [9, 1, 2],
    [4, 6, 8],
    [2, 5, 1]
  ];
  
  console.log('Matriz desordenada:');
  console.log(matrizDesordenada);
  
  // Ordenar la matriz por la primera columna utilizando el método Shell
  ordenarMatrizPorPrimeraColumna(matrizDesordenada);
  
  console.log('\nMatriz ordenada por la primera columna:');
  console.log(matrizDesordenada);
  
