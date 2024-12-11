let pessoa = {
  nome: "Paula",
  idade: 30,
  dizerOla() {
    console.log(
      "Olá " + this.nome + "!! Sua idade é: " + this.idade + " anos!"
    );
  },
};
console.log(pessoa);
pessoa.dizerOla();
