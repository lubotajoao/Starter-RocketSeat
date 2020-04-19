import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {
  // Metodo executado assim que o componente e' exibido em tela
  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = async () => {
    const response = await api.get("/products");

    console.log(response.data.docs);
  };

  render() {
    return <h1>Hello Le monde!!!</h1>;
  }
}
