import api from "./api";

/**
 * Classe que controlara' toda aplicacao
 */
class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");
    this.inputEl = document.querySelector("input[name=repository");
    this.listEl = document.getElementById("repo-list");

    this.registerHandless();
  }

  /**
   * Metodo para o registro de eventos
   */
  registerHandless() {
    this.formEl.onsubmit = (event) => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement("span");
      loadingEl.appendChild(document.createTextNode("Carregando"));
      loadingEl.setAttribute("id", "loading");

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById("loading").remove();
    }
  }

  /**
   * Metodo para adicao de repository no respositories (array)
   */
  async addRepository(event) {
    event.preventDefault(); // Tira o default do html de recarregar a pagina

    const repotInput = this.inputEl.value;

    if (repotInput.length === 0) {
      return; // A funcao para de executar neste return.
    }

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repotInput}`);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url },
      } = response.data;

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });

      // Esta linha limpa a tela quando ha' persistencia de informacoes
      this.inputEl.value = "";

      this.render();
    } catch (err) {
      alert("O repositório não existe!");
    }

    // De qualquer forma remover a informacao do loading, em caso de sucesso ou falha
    this.setLoading(false);
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
      linkEl.setAttribute("href", repo.html_url);
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
