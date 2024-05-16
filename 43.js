const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarRegistros() {
  fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo DATOS.DAT:', err);
      return;
    }
    const registros = data.trim().split('\n');
    registros.forEach((registro, index) => {
      console.log(`${index + 1}. ${registro}`);
    });
    seleccionarModificacion(registros);
  });
}

function seleccionarModificacion(registros) {
  rl.question('Seleccione el número del registro que desea modificar: ', (numero) => {
    const index = parseInt(numero) - 1;
    if (index < 0 || index >= registros.length) {
      console.log('Número de registro inválido.');
      rl.close();
      return;
    }
    const registroAModificar = registros[index];
    rl.question('Ingrese los nuevos datos del registro (ID, NOMBRE, APELLIDOS, DIRECCIÓN, ESTADO): ', (nuevosDatos) => {
      registros[index] = nuevosDatos;
      const nuevoContenido = registros.join('\n');
      fs.writeFile('DATOS.DAT', nuevoContenido, (err) => {
        if (err) {
          console.error('Error al escribir en el archivo DATOS.DAT:', err);
          return;
        }
        console.log('Registro modificado correctamente.');
        rl.close();
      });
    });
  });
}

mostrarRegistros();
