# Desafío Datos Usuario

Este proyecto es una aplicación web que obtiene y muestra datos de usuarios generados aleatoriamente utilizando la API [randomuser.me](https://randomuser.me/). Los datos de cada usuario se muestran en tarjetas interactivas con animaciones.

## Características

- Muestra información de 10 usuarios aleatorios.
- Cada tarjeta incluye la imagen, nombre, correo electrónico y número de teléfono del usuario.
- Efecto de animación en las tarjetas utilizando la librería [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/).
- Diseño responsivo con un estilo minimalista.

## Tecnologías utilizadas

- **HTML5**: Estructura de la página.
- **CSS3**: Estilos personalizados para las tarjetas de usuario.
- **JavaScript (ES6)**: Lógica para obtener los datos de la API y mostrarlos en el DOM.
- **API randomuser.me**: Para obtener los datos de usuarios ficticios.
- **Water.css**: Estilo base minimalista.
- **AOS**: Librería de animaciones para mejorar la experiencia de usuario.

## Instalación

1. Clona este repositorio en tu máquina local:
2. ```bash
   git clone https://github.com/mr-gantiva/desafio-datos-usuario
   ```
3. Abre el archivo index.html en tu navegador para ver la aplicación en funcionamiento.

## Uso

Al cargar la página, la aplicación realizará una petición a la API de randomuser.me para obtener información de 10 usuarios aleatorios. Estos usuarios se mostrarán en tarjetas que incluyen una imagen, nombre, correo electrónico y teléfono.

## Créditos
randomuser.me API por proporcionar los datos de usuarios.
Water.css por el estilo minimalista base.
AOS (Animate On Scroll) por las animaciones en las tarjetas.

## Licencia
Este proyecto está bajo la licencia MIT.