let ROUTES = {};
let rootEl;

const setRootEl =(el) => {
    rootEl = el
}

function setRoutes(routes) {
   ROUTES = routes 
}

function renderView(view) {
   //limpar antes de renderizar
    rootEl.innerHTML = "";
    //append apenas agrega/adiciona.
    rootEl.appendChild(ROUTES[view]()) 
}

function onURLChange(location) {
    renderView(location.hash)
}

export {setRootEl, setRoutes, renderView, onURLChange};