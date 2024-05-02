function relojDigital() {
    // Obtener la fecha y hora actual
    let fechaHora = new Date();

    // Obtener las horas, minutos y segundos
    let horas = fechaHora.getHours();
    let minutos = fechaHora.getMinutes();
    let segundos = fechaHora.getSeconds();

    // Formatear la hora para que tenga siempre dos dígitos
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Imprimir la hora en la consola
    console.log(`${horas}:${minutos}:${segundos}`);
}

// Actualizar el reloj cada segundo
setInterval(relojDigital, 1000);
