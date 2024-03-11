// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.


import Home from './views/Chat.js';
import { setRootEl, setRoutes, onURLChange, renderView } from './router.js';
//Ejemplo de definición de rutas:

const routes = {
    "/": Home,
    "/Chat": Chat
}

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/* root element */);
});



/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/