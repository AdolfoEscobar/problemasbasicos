// Número de columnas que deseas imprimir por fila
const columnasPorFila = 10;

// Iterar sobre las filas
for (let fila = 0; fila <= 10; fila++) {
  let filaImpresa = '';

  // Iterar sobre las columnas
  for (let columna = 0; columna < columnasPorFila; columna++) {
    // Calcular el número correspondiente
    const numero = fila * columnasPorFila + columna;

    // Agregar el número a la fila
    filaImpresa += numero.toString().padStart(4, ' ');
  }

  // Imprimir la fila completa
  console.log(filaImpresa);
}
