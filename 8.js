const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solicitarRespuesta() {
  rl.question('Introduce S o N: ', (respuesta) => {
    // Verificar si la respuesta es válida (S o N en mayúsculas o minúsculas)
    if (respuesta.toUpperCase() === 'S' || respuesta.toUpperCase() === 'N') {
      console.log('Respuesta válida:', respuesta.toUpperCase());
      rl.close();
    } else {
      console.log('Por favor, introduce S o N.');
      solicitarRespuesta(); // Volver a solicitar la respuesta si no es válida
    }
  });
}

solicitarRespuesta(); // Comenzar solicitando la respuesta al usuario
