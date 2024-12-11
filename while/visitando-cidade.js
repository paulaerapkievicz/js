const turista = prompt("E ai, turista! Informe seu nome: ");
let contagem = 0;
let cidadesVisitadas = "";

let visitou = prompt("Você visitou alguma cidade? (sim/não)");

while (visitou === "sim") {
  let cidade = prompt("Qual o nome da cidade?");
  cidadesVisitadas += " - " + cidade + ";\n";
  contagem++;
  visitou = prompt("Você visitou alguma outra cidade? (sim/não)");
}
alert(
  turista +
    " as cidades visitadas por você são:\n" +
    cidadesVisitadas +
    "\n\n Você visitou um total de: " +
    contagem +
    " cidades!"
);
