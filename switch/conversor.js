const valorMetros = prompt("Informe uma medida: ");
const unidadeMedida = prompt(
  "Escolha uma opção para converter: \nmm \ncm \ndm \ndam \nhm \nkm"
);

switch (unidadeMedida) {
  case "mm":
    alert("O resultado em milímetro é:" + valorMetros * 1000);
    break;
  case "cm":
    alert("O resultado em centímetro  é:" + valorMetros * 100);
    break;
  case "dm":
    alert("O resultado em decímetro  é:" + valorMetros * 10);
    break;
  case "dam":
    alert("O resultado em decâmetro  é:" + valorMetros / 10);
    break;
  case "hm":
    alert("O resultado em hectômetro  é:" + valorMetros / 100);
    break;
  case "km":
    alert("O resultado em quilômetro  é:" + valorMetros / 1000);
    break;
  default:
    alert("Opção inválida");
}
