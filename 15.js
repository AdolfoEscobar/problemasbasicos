const num1 = parseInt(prompt("Introduce el primer número:"));
const num2 = parseInt(prompt("Introduce el segundo número:"));
let contadorNumeros = 0;
let contadorPares = 0;
let sumaImpares = 0;
for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    console.log(i);
    contadorNumeros++;
    if (i % 2 === 0) {
        contadorPares++;
    } else {
        sumaImpares += i;
    }
}
console.log("Cantidad de números: " + contadorNumeros);
console.log("Cantidad de pares: " + contadorPares);
console.log("Suma de impares: " + sumaImpares);