// Exercício 1: Alturas das pessoas
const alturas = [1.75, 1.80, 1.65, 1.70, 1.85, 1.60, 1.72, 1.68, 1.78, 1.75, 1.90, 1.62, 1.74, 1.69, 1.87];
const menorAltura = Math.min(...alturas);
const maiorAltura = Math.max(...alturas);
console.log("Exercício 1:");
console.log("Menor altura do grupo: " + menorAltura + "m");
console.log("Maior altura do grupo: " + maiorAltura + "m");

// Exercício 2: Crescimento de Pedro e Lucas
const alturaPedro = 1.50;
const alturaLucas = 1.10;
const crescimentoPedro = 0.02; // 2 cm por ano
const crescimentoLucas = 0.03; // 3 cm por ano
let anos = 0;

while (alturaLucas < alturaPedro) {
    alturaPedro += crescimentoPedro;
    alturaLucas += crescimentoLucas;
    anos++;
}

console.log("Exercício 2:");
console.log("a. Lucas e Pedro terão o mesmo tamanho em " + anos + " anos.");
console.log("b. Lucas será maior que Pedro em " + anos + " anos.");

// Exercício 3: Tabuada
const n = 5; // Número da tabuada
const i = 10; // Quantidade de iterações
console.log("Exercício 3:");
for (let j = 1; j <= i; j++) {
    console.log(n + " * " + j + " = " + (n * j));
}

// Exercício 4: Múltiplos de 3 e 5
console.log("Exercício 4:");
for (let k = 1; k <= 250; k++) {
    if (k % 3 === 0 || k % 5 === 0) {
        console.log(k);
    }
}

// Exercício 5: Contagem até um valor digitado
const valorDigitado = 9;
let contagem = "Contagem: ";
for (let l = 0; l <= valorDigitado; l++) {
    contagem += l;
    if (l < valorDigitado) {
        contagem += ", ";
    } else {
        contagem += ", FIM!";
    }
}
console.log("Exercício 5:");
console.log(contagem);

// Exercício 6: Contagem regressiva com números primos destacados
console.log("Exercício 6:");
for (let m = 30; m >= 1; m--) {
    if (isPrimo(m)) {
        console.log("[" + m + "]");
    } else {
        console.log(m);
    }
}

// Função para verificar se um número é primo
function isPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Exercício 7: Média, valores positivos e negativos
const numeros = [-5, 10, 20, -15, 30, -25, 5, 15, -10, 25];
let soma = 0;
let quantPositivos = 0;
let quantNegativos = 0;
for (let num of numeros) {
    soma += num;
    if (num > 0) quantPositivos++;
    if (num < 0) quantNegativos++;
}
const media = soma / numeros.length;
const percentPositivos = (quantPositivos / numeros.length) * 100;
const percentNegativos = (quantNegativos / numeros.length) * 100;

console.log("Exercício 7:");
console.log("Média: " + media);
console.log("Quantidade de valores positivos: " + quantPositivos);
console.log("Quantidade de valores negativos: " + quantNegativos);
console.log("Percentual de valores positivos: " + percentPositivos + "%");
console.log("Percentual de valores negativos: " + percentNegativos + "%");

