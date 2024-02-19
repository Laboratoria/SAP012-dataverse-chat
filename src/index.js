// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.


// import Example from './views/Example.js';

// Ejemplo de definición de rutas:

// const routes = {
//     "/": Example,
//     ...
// }



// TODO:
// 1.- Definir rutas en router.
// 2.- Pasar "root element" a router.
// 3.- Invocar el router para renderizar la vista correcta.

import Home from "./views/Home.js";
import About from "./views/About.js";
import {setRootEl, setRoutes, renderView} from "./router.js"

const root = document.getElementById("root");
root.appendChild(Home());

const routes = {
  "/": Home,
  "/about": About
}

setRootEl(root);
setRoutes(routes);
renderView(window.location.pathname);
