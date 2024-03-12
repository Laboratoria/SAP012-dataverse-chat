// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.


import { Home } from './views/Home.js';
import { Chat } from './views/Chat.js';
import { setRootEl, setRoutes, onURLChange } from './router.js';
//Ejemplo de definición de rutas:

const routes = {
    "/": Home,
    "/Chat": Chat
}

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root"); // Selecionando o elemento raiz
  setRootEl(root);
  onURLChange();

});



/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

