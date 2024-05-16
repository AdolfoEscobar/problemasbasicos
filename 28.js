function lanzarMoneda() {
    // Generar un número aleatorio entre 0 y 1
    const resultado = Math.random();
  
    // Asignar cara o cruz dependiendo del resultado
    if (resultado < 0.5) {
      return 'Cara';
    } else {
      return 'Cruz';
    }
  }
  
  // Ejemplo de lanzamiento de moneda
  const resultadoLanzamiento = lanzarMoneda();
  console.log('Resultado del lanzamiento:', resultadoLanzamiento);
  