// Función para generar la tabla
function generarTabla(paginas, filas, columnas) {
    let valor = 1;
    const tabla = [];
  
    for (let pagina = 0; pagina < paginas; pagina++) {
      const paginaActual = [];
      for (let fila = 0; fila < filas; fila++) {
        const filaActual = [];
        for (let columna = 0; columna < columnas; columna++) {
          filaActual.push(valor++);
        }
        paginaActual.push(filaActual);
      }
      tabla.push(paginaActual);
    }
  
    return tabla;
  }
  
  // Generar la tabla de 3 páginas, 4 filas y 5 columnas
  const tabla = generarTabla(3, 4, 5);
  
  // Imprimir la tabla
  console.log('Tabla generada:');
  for (let pagina = 0; pagina < tabla.length; pagina++) {
    console.log(`Página ${pagina + 1}:`);
    for (let fila = 0; fila < tabla[pagina].length; fila++) {
      console.log(tabla[pagina][fila].join('\t'));
    }
    console.log();
  }
  