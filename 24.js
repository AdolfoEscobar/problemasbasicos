function esPrimo(numero) {
    // Verificar si el número es menor que 2, en cuyo caso no es primo
    if (numero < 2) {
      return false;
    }
  
    // Iterar desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Si el número es divisible por cualquier número entre 2 y su raíz cuadrada, no es primo
      if (numero % i === 0) {
        return false;
      }
    }
  
    // Si no se encontró ningún divisor entre 2 y la raíz cuadrada del número, es primo
    return true;
  }
  
  // Ejemplo de uso de la función esPrimo
  const numero = 5;
  if (esPrimo(numero)) {
    console.log(`${numero} es primo.`);
  } else {
    console.log(`${numero} no es primo.`);
  }
  