const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function buscarRegistroPorID(idBuscado) {
  fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo DATOS.DAT:', err);
      return;
    }
    const registros = data.trim().split('\n');
    let encontrado = false;
    registros.forEach((registro) => {
      const campos = registro.split(',');
      const id = campos[0].trim();
      if (id === idBuscado) {
        console.log('Registro encontrado:');
        console.log(registro);
        encontrado = true;
        return;
      }
    });
    if (!encontrado) {
      console.log('Registro no encontrado.');
    }
    rl.close();
  });
}

rl.question('Introduce el ID del registro que deseas consultar: ', (idBuscado) => {
  buscarRegistroPorID(idBuscado);
});
