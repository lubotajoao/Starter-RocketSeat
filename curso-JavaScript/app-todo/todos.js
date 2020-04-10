var listElement = document.querySelector("#app ul"); // Dentro da div app está sendo buscando todas uls
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
  "Fazer Café",
  "Estudar JavaScript",
  "Acessar Comunidade da RocketSeat",
];

/**
 * Função para renderizar os TODOs na tela
 */
function renderTodos() {
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

renderTodos();
