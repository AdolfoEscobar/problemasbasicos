function buscarCalificacion(listaCalificaciones, calificacionBuscada) {
    const encontrado = listaCalificaciones.includes(calificacionBuscada);
    if (encontrado) {
        console.log("La calificación fue encontrada en la lista.");
    } else {
        console.log("La calificación no fue encontrada en la lista.");
    }
}