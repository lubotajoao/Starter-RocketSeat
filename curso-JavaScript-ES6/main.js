class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push("Nodo todo");
    console.log(this.todos);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function (){
  MinhaLista.addTodo();
}