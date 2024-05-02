let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros.push(parseInt(prompt("Introduce un número:")));
}
console.log("Mayor: " + Math.max(...numeros));
console.log("Menor: " + Math.min(...numeros));
