/**
 * Classe que controlara' toda aplicacao
 */
class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");

    this.registerHandless();
  }

  /**
   * Metodo para o registro de eventos
   */
  registerHandless() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
  }

  /**
   * Metodo para adicao de repository no respositories (array)
   */
  addRepository(event) {
    event.preventDefault(); // Tira o default do html de recarregar a pagina

    this.repositories.push({
      name: "RocketSeat.com.br",
      description: "Tire a sua ideia do papel e dê vida à sua StartUp.",
      avatar_url: "https://avatars0.githubusercontent.com/u/28929274?v=4",
      html_url: "http://github.com/rocketseat",
    });
    this.render();
  }

  /**
   * Apaga todo conteudo contido na tela e renderiza do Zero
   * Vai percorrer o array e mostrar cada um dos repositorios do array
   */
  render() {
    this.listEl.innerHTML = "";

    // Criacao de todos os elementos que serao exibidos
    this.repositories.forEach((repo) => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();
