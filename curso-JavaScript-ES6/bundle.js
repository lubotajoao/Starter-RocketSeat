"use strict";

/**
 * Desestruturacao
 */
var usuario = {
  nome: "Lubota",
  idade: 30,
  endereco: {
    cidade: "Sao Paulo",
    estado: "SP"
  }
}; // const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

/**
 * Utilizando o conceito de desestruturacao abaixo, o que reflete as tres linhas
 * acima, coletando cada informacao desejada
 */
// const {
//   nome,
//   idade,
//   endereco: { cidade },
// } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// function mostraNome(usuario) {
//   console.log(usuario.nome);
// }

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
