function crearTablaPaginas() {
    const tabla = [];
    let contador = 1;
    for (let i = 0; i < 3; i++) {
        tabla[i] = [];
        for (let j = 0; j < 4; j++) {
            tabla[i][j] = [];
            for (let k = 0; k < 5; k++) {
                tabla[i][j][k] = contador;
                contador++;
            }
        }
    }
    return tabla;
}
