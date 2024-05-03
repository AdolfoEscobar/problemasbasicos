function calcularMedia(calificaciones) {
    const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    const media = suma / calificaciones.length;
    console.log("La media de las calificaciones es:", media);
}
