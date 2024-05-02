function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}
const numeroFactorial = parseInt(prompt("Introduce un número:"));
console.log("Factorial de " + numeroFactorial + ": " + factorial(numeroFactorial));
