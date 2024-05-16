const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let calificaciones = [];

// Función para buscar una nota en la lista de calificaciones
function buscarNota(nota) {
  const indice = calificaciones.indexOf(nota);
  if (indice !== -1) {
    console.log(`La nota ${nota} se encontró en la asignatura número ${indice + 1}.`);
  } else {
    console.log(`La nota ${nota} no se encontró en la lista de calificaciones.`);
  }
}

rl.question('Introduce las calificaciones del alumno en 10 asignaturas (separadas por espacios): ', (input) => {
  // Convertir la entrada en un arreglo de números
  calificaciones = input.split(' ').map(Number);

  // Verificar si se introdujeron exactamente 10 calificaciones
  if (calificaciones.length !== 10) {
    console.log('Debes introducir exactamente 10 calificaciones.');
    rl.close();
    return;
  }

  console.log('Calificaciones del alumno:', calificaciones);

  rl.question('Introduce la nota que deseas buscar: ', (nota) => {
    nota = parseFloat(nota);
    buscarNota(nota);
    rl.close();
  });
});
