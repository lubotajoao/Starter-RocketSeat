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
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

/**
 * Método para adicionar um TODO
 */
function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "";

  renderTodos();
}

buttonElement.onclick = addTodo;

/**
 * Método para remover um TODO
 */
function deleteTodo(pos) {
  todos.splice(pos, 1);

  renderTodos();
}
