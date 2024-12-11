const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Você tem cadastrados " +
      imoveis.length +
      " imóveis !!!\n\nEscolha a opção desejada:\n 1 - Se você deseja SALVAR um novo imóvel?\n 2 - Mostrar imóveis já cadastrados\n 3 - Se você deseja ENCERRAR o cadastro e sair!"
  );

  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Informe o nome do proprietário: ");
      imovel.quartos = prompt("Informe a quantidade de quartos: ");
      imovel.banheiros = prompt("Informe a quantidade de banheiros: ");
      imovel.garagem = prompt("Informe se possui garagem: ");

      const confirmacao = confirm(
        "Salvar este imóvel?\n\n Proprietário: " +
          imovel.proprietario +
          "\n Quartos: " +
          imovel.quartos +
          "\n Banheiros: " +
          imovel.banheiros +
          "\n Garagem: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("IMÓVEL SALVO COM SUCESO!!");
      } else {
        alert("Voltando ao menu!\nNão foi possível salvar as informações!");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel: " +
            (i + 1) +
            "\n Proprietário: " +
            imoveis[i].proprietario +
            "\n Quartos: " +
            imoveis[i].quartos +
            "\n Banheiros: " +
            imoveis[i].banheiros +
            "\n Garagem: " +
            imoveis[i].garagem
        );
      }

      // if (imoveis.length === undefined) {
      //   alert("Nenhum imóvel está cadastrado!");
      // } else {
      //   alert("Imóveis cadastrados: \n\n" + imoveis);
      // }
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida!");
  }
  alert("Você finalizou o sistema de cadastro!");
} while (opcao !== "3");

// - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// - O menu deve ter a opção de salvar um imóvel.
// - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
//     - Nome do proprietário.
//     - Quantidade de quartos.
//     - Quantidade de banheiros.
//     - Se possui garagem.
// - O menu também deve ter a opção de mostrar todos os imóveis salvos.
