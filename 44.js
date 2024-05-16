const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el estado que deseas buscar: ', (estadoBuscado) => {
  fs.readFile('DATOS.DAT', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo DATOS.DAT:', err);
      return;
    }
    const registros = data.trim().split('\n');
    console.log(`Registros con estado "${estadoBuscado}":`);
    registros.forEach((registro) => {
      const campos = registro.split(',');
      const estado = campos[4].trim();
      if (estado === estadoBuscado) {
        console.log(registro);
      }
    });
    rl.close();
  });
});
