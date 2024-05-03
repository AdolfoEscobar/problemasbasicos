function imprimirEnCentro(frase) {
    const anchoConsola = process.stdout.columns;
    const espacio = " ".repeat((anchoConsola - frase.length) / 2);
    console.log(espacio + frase);
}
