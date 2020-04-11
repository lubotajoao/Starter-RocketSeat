import axios from "axios";

class Api {
  static async getUserInfo(userName) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      console.log(response);
    } catch {
      console.warn("Erro na API");
    }
  }
}

Api.getUserInfo("diego3g");
Api.getUserInfo("diego3gfa");
