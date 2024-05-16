// Definir la matriz de ventas
const ventas = [
    // Representante 1
    [
      [100, 200, 150, 300], // Ventas del producto 1 para cada mes
      [250, 150, 200, 400], // Ventas del producto 2 para cada mes
      [300, 100, 250, 350], // Ventas del producto 3 para cada mes
      [200, 300, 350, 450]  // Ventas del producto 4 para cada mes
    ],
    // Representante 2
    [
      [150, 250, 200, 350],
      [200, 300, 250, 400],
      [250, 150, 300, 450],
      [300, 200, 350, 500]
    ],
    // Representante 3
    [
      [200, 300, 250, 400],
      [300, 200, 350, 500],
      [350, 250, 400, 600],
      [250, 350, 450, 550]
    ]
  ];
  
  // Calcular el total de ventas por mes y por producto
  const totalVentas = [];
  for (let mes = 0; mes < 4; mes++) {
    totalVentas.push([]);
    for (let producto = 0; producto < 4; producto++) {
      let total = 0;
      for (let representante = 0; representante < 3; representante++) {
        total += ventas[representante][producto][mes];
      }
      totalVentas[mes].push(total);
    }
  }
  
  // Imprimir la información del total de ventas
  console.log('Total de ventas por mes y por producto:');
  for (let mes = 0; mes < 4; mes++) {
    console.log(`Mes ${mes + 1}:`);
    for (let producto = 0; producto < 4; producto++) {
      console.log(`  Producto ${producto + 1}: ${totalVentas[mes][producto]}`);
    }
  }
  