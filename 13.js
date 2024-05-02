let contadorMultiplos2o3 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
        console.log(i);
        contadorMultiplos2o3++;
    }
}
console.log("Cantidad de múltiplos de 2 o 3: " + contadorMultiplos2o3);