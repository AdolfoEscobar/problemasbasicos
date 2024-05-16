const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function darAlta() {
  rl.question('Introduce el ID: ', (id) => {
    rl.question('Introduce el nombre: ', (nombre) => {
      rl.question('Introduce los apellidos: ', (apellidos) => {
        rl.question('Introduce la dirección: ', (direccion) => {
          rl.question('Introduce el estado: ', (estado) => {
            const registro = `${id},${nombre},${apellidos},${direccion},${estado}\n`;
            fs.appendFile('DATOS.DAT', registro, (err) => {
              if (err) throw err;
              console.log('Registro agregado correctamente.');
              rl.close();
            });
          });
        });
      });
    });
  });
}

darAlta();
