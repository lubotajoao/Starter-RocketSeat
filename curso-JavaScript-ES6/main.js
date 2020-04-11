/**
 * REST -> resto, restante, o que sobra
 */

// const usuario = {
//   nome: "Lubota",
//   idade: 23,
//   empresa: "Lenght",
// };

// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// Array
// const arr = [1, 2, 3, 4];

// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// Parametros de funcoes
// Exemplo Funcao Soma
// function soma(a, b, c, ..., n){
//   return a + b + c ... + n;
// }

// console.log(soma(1,3,4...,n))

function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 3, 4, 9));

/**
 * SPREAD -> propaga os dados para outras estruturas de dados
 */
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

const usuario1 = {
  nome: "Lubota",
  idade: 30,
  empresa: "Lenght",
};

const usuario2 = { ...usuario1, nome: "Joao" };

console.log(usuario2);
