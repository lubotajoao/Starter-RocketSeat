const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

// minhaPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {});

// async function executaPromise() {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());

//   // Sem utiilzar async/await ficaria em cascata da seguinte forma
//   // minhaPromise().then((response) => {
//   //   console.log(response);

//   //   minhaPromise().then((response) => {
//   //     console.log(response);

//   //     minhaPromise().then((response) => {
//   //       console.log(response);
//   //     });
//   //   });
//   // });

//   // Tudo isto e' convertido nestas tres linhas acima menos verbosas
// }

// Async/Await são utilizadas também numa arrow function

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};

executaPromise();
