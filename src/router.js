let ROUTES = {};
let rootEl;

const setRootEl =(el) => {
    rootEl = el
}

function setRoutes(routes) {
   ROUTES = routes 
}

function renderView(view) {
    rootEl.appendChild(ROUTES[view]()) 
}

function onURLChange(location) {
    renderView(location.hash)
}

export {setRootEl, setRoutes, renderView, onURLChange};