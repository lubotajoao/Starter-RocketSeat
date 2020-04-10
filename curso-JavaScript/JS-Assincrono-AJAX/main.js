/**
 * Fazendo requisição usando API do Axios
 */

axios
  .get("https://api.github.com/users/lubotajoao")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.warn(error);
  });
