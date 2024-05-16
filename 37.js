const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let colegio = {};

rl.question('Introduce el número de cursos: ', (numCursos) => {
  numCursos = parseInt(numCursos);
  cargarNotas(1, numCursos);
});

function cargarNotas(curso, numCursos) {
  rl.question(`Introduce el número de alumnos para el curso ${curso}: `, (numAlumnos) => {
    numAlumnos = parseInt(numAlumnos);
    colegio[curso] = { notas: [] };

    cargarNotasAlumno(curso, numAlumnos, 1, numCursos);
  });
}

function cargarNotasAlumno(curso, numAlumnos, alumno, numCursos) {
  rl.question(`Introduce la nota del alumno ${alumno} del curso ${curso}: `, (nota) => {
    nota = parseFloat(nota);
    colegio[curso].notas.push(nota);

    if (alumno < numAlumnos) {
      cargarNotasAlumno(curso, numAlumnos, alumno + 1, numCursos);
    } else if (curso < numCursos) {
      cargarNotas(curso + 1, numCursos);
    } else {
      console.log('Notas de los alumnos cargadas correctamente:', colegio);
      rl.close();
    }
  });
}


