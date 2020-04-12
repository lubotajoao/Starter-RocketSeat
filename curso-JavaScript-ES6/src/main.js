/**
 * Classe que controlara' toda aplicacao
 */
class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");

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

    console.log(this.repositories);
  }
}

new App();
