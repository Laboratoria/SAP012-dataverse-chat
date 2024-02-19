let ROUTES = {};
let rootEl;

export const setRootEl = (element) => {
  rootEl = element;
};

export const setRoutes = (routes) => {
  ROUTES = routes
};

export const renderView = (pathname, props) => {
  rootEl.textContent = ""
  const routeFunc = ROUTES[pathname]
  console.log(pathname)
  const element = routeFunc();
  rootEl.appendChild(element);
};



// laranja = parametro
// verde = função
// rosa = palavras reservadas da linguagem
// branca = varaveis
// roxa = constante
