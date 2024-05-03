function imprimirNumerosControlado() {
    let num = 0;
    for (let i = 0; i <= 10; i++) {
        let fila = "";
        for (let j = 0; j <= 10; j++) {
            fila += num + " ";
            num++;
        }
        console.log(fila);
    }
}