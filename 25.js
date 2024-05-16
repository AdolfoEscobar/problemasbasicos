function convertirANumeroRomano(numero) {
    if (numero >= 5000) {
      return 'Número demasiado grande para ser convertido a número romano.';
    }
  
    const valoresRomanos = [
      { valor: 1000, romano: 'M' },
      { valor: 900, romano: 'CM' },
      { valor: 500, romano: 'D' },
      { valor: 400, romano: 'CD' },
      { valor: 100, romano: 'C' },
      { valor: 90, romano: 'XC' },
      { valor: 50, romano: 'L' },
      { valor: 40, romano: 'XL' },
      { valor: 10, romano: 'X' },
      { valor: 9, romano: 'IX' },
      { valor: 5, romano: 'V' },
      { valor: 4, romano: 'IV' },
      { valor: 1, romano: 'I' }
    ];
  
    let numeroRomano = '';
  
    for (let i = 0; i < valoresRomanos.length; i++) {
      while (numero >= valoresRomanos[i].valor) {
        numeroRomano += valoresRomanos[i].romano;
        numero -= valoresRomanos[i].valor;
      }
    }
  
    return numeroRomano;
  }
  
  // Ejemplo de uso de la función convertirANumeroRomano
  const numero = 2003;
  const numeroRomano = convertirANumeroRomano(numero);
  console.log(`${numero} en números romanos es: ${numeroRomano}`);
  