function transponerMatriz(matriz) {
    const matrizTranspuesta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        matrizTranspuesta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            matrizTranspuesta[i][j] = matriz[j][i];
        }
    }
    return matrizTranspuesta;
}