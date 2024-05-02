const limiteMultiplos = parseInt(prompt("Introduce un número:"));
let contadorMultiplos = 0;
for (let i = 1; i <= limiteMultiplos; i++) {
    if (i % 3 === 0) {
        console.log(i);
        contadorMultiplos++;
    }
}
console.log("Cantidad de múltiplos de 3: " + contadorMultiplos);