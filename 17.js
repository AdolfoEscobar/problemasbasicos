const numA = parseInt(prompt("Introduce el primer número:"));
const numB = parseInt(prompt("Introduce el segundo número:"));
let contadorMultiplos2 = 0;
let sumaMultiplos2 = 0;
for (let i = numA; i <= numB; i++) {
    if (i % 2 === 0) {
        console.log(i);
        contadorMultiplos2++;
        sumaMultiplos2 += i;
    }
}
console.log("Cantidad de múltiplos de 2: " + contadorMultiplos2);
console.log("Suma de múltiplos de 2: " + sumaMultiplos2);
