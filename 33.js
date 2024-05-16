const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let calificaciones = [];

rl.question('Introduce las calificaciones del alumno en 10 asignaturas (separadas por espacios): ', (input) => {
  // Convertir la entrada en un arreglo de números
  calificaciones = input.split(' ').map(Number);

  // Verificar si se introdujeron exactamente 10 calificaciones
  if (calificaciones.length !== 10) {
    console.log('Debes introducir exactamente 10 calificaciones.');
    rl.close();
    return;
  }

  // Calcular la suma de las calificaciones
  const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);

  // Calcular la media
  const media = suma / calificaciones.length;

  console.log('Calificaciones del alumno:', calificaciones);
  console.log('Media del alumno:', media);

  rl.close();
});
