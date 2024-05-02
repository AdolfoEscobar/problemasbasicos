const frase = prompt("Introduce una frase:");
const letra = prompt("Introduce una letra a buscar:");
let contadorLetra = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        contadorLetra++;
    }
}
console.log("Cantidad de veces que aparece la letra '" + letra + "': " + contadorLetra);
