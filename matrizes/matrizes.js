const arr = [
  "1º Nível",
  ["2º Nível", 42, true],
  [
    ["3º Nível", "1º item", "Olá Mundo!"],
    ["3º Nível", "2º item", "OI Mundo!"],
  ],
  [],
];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[2]);
console.log(arr[2][0]);
console.log(arr[2][0][2]);
console.log(arr[2][1][2]);
console.log(arr[2][1][1]);
console.table(arr);

const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];
console.table(matriz);

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz2 = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];
matriz2.push(["Nova Linha"]);
matriz2[0].push("Nova Coluna");

console.table(matriz2);
for (let i = 0; i < matriz2.length; i++) {
  for (let j = 0; j < matriz2[i].length; j++) {
    const elemento = matriz2[i][j];
    console.log("Posição: \n" + elemento);
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento);
  }
  console.log(matriz2[i]);
}
