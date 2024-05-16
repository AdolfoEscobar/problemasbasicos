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
    seleccionarBaja(registros);
  });
}

function seleccionarBaja(registros) {
  rl.question('Seleccione el número del registro que desea dar de baja: ', (numero) => {
    const index = parseInt(numero) - 1;
    if (index < 0 || index >= registros.length) {
      console.log('Número de registro inválido.');
      rl.close();
      return;
    }
    const registroBaja = registros.splice(index, 1)[0];
    const nuevoContenido = registros.join('\n');
    fs.writeFile('DATOS.DAT', nuevoContenido, (err) => {
      if (err) {
        console.error('Error al escribir en el archivo DATOS.DAT:', err);
        return;
      }
      console.log(`Registro dado de baja: ${registroBaja}`);
      rl.close();
    });
  });
}

mostrarRegistros();
