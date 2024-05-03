function realizarOperaciones(numero) {
    if (esPrimo(numero)) {
        console.log("El número es primo.");
    } else {
        console.log("El número no es primo.");
    }

    console.log("Factorial:", factorial(numero));

    tablaMultiplicar(numero);
}
