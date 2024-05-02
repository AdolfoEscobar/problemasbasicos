let sumaPares1000 = 0;
let sumaImpares1000 = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        sumaPares1000 += i;
    } else {
        sumaImpares1000 += i;
    }
}
console.log("Suma de números pares hasta 1000: " + sumaPares1000);
console.log("Suma de números impares hasta 1000: " + sumaImpares1000);
