function tiradasDados() {
    let contador = 0;
    for (let i = 0; i < 100; i++) {
        const dado1 = Math.ceil(Math.random() * 6);
        const dado2 = Math.ceil(Math.random() * 6);
        if (dado1 + dado2 === 10) {
            contador++;
        }
    }
    console.log("Número de veces que suman 10:", contador);
}