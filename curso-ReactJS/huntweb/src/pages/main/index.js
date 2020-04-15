import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const resposne = await api.get("/products");

    this.setState({ products: resposne.data.docs });
  };

  render() {
    return <h1>Contagem de produtos: {this.state.products.length}</h1>;
  }
}
