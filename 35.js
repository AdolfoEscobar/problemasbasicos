function generarMatriz() {
    const matriz = [];
    for (let i = 0; i < 4; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = Math.ceil(Math.random() * 100);
        }
    }
    return matriz;
}