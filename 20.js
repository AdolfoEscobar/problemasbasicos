function factorial(numero) {
    // Verificar si el número es 0 o 1, en cuyo caso el factorial es 1
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    // Inicializar el resultado del factorial
    let resultado = 1;
  
    // Calcular el factorial multiplicando todos los números desde 2 hasta el número dado
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  // Ejemplo de uso de la función factorial
  const numero = 5;
  const factorialNumero = factorial(numero);
  console.log(`El factorial de ${numero} es: ${factorialNumero}`);
  
