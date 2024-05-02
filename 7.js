let contadorFrases = 0;
let frase = "";
while (frase !== "fin") {
    frase = prompt("Introduce una frase (Escribe 'fin' para terminar):");
    if (frase !== "fin") {
        contadorFrases++;
    }
}
console.log("Cantidad de frases introducidas: " + contadorFrases);