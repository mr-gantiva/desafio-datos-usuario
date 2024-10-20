// Tomar al elemento HTML
// Llamemos a la API REST
// Obtenemos los datos de la API
// Iterar y mostrar
// Construyo elementos html para luego colocarlos en la página

const datosUsuarios = (() => {
  const boxUsuarios = document.getElementById("usuario-data");

  return {
    show: async () => {
      let response = await fetch("https://randomuser.me/api/?results=10");
      let data = await response.json();

      let usuarioInfo = data.results
        .map(
          (usuario) =>
            `
          <div class= "card"  data-aos="flip-right">
              <div class= card__img><img src='${usuario.picture.large}'></div>
              <div class= card__info>
                  <h2>${usuario.name.first} ${usuario.name.last}</h2>
                  <p>${usuario.email}</p>
                  <p>${usuario.phone}</p>
              </div>
          </div>
        `
        )
        .join("");
      console.log(usuarioInfo);
      boxUsuarios.innerHTML = usuarioInfo;
    },
  };
})(); // Función autoejecutable IIFE
datosUsuarios.show();
