/**
 * Variáveis e Constantes de Escopo
 */

// // Permitida a mudanca de valor da variavel
// var numero = 1;
// numero = 3;

// // Const nao permite a mudanca de valor da variavel
// const numero = 2;
// numero = 5; // resultara' em erro

// Mas a sobreescrita e' permitida - mudanca
const usuario = {
  nome: "Lubota",
};

usuario.nome = "Jorge";

console.log(usuario);
