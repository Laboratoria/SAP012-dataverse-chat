let ROUTES = {};
let rootEl;

export const setRootEl = (element) => {
  rootEl = element;
};

export const setRoutes = (routes) => {
  ROUTES = routes
};

export const renderView = (pathname, props = {}) => {
  // clear the root element
  rootEl.innerHTML = '';
  // find the correct view in ROUTES for the pathname
  const view = ROUTES[pathname];
  // in case not found render the error view
  if (!view) {
    rootEl.appendChild(ROUTES['/error'](props));
    return;
  }
  // render the correct view passing the value of props
  const viewElement = view(props);
  // add the view element to the DOM root element
  rootEl.appendChild(viewElement);


  // const root = rootEl;
  // root.innerHTML = ROUTES[pathname](props);
  // rootEl.textContent = ""
  // const routeFunc = ROUTES[pathname]
  // console.log(pathname)
  // const element = routeFunc();
  // rootEl.appendChild(element);
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  window.history.pushState({}, '', pathname);
  // render the view with the pathname and props
  renderView(pathname, props);
  
}

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  const url = new URL(location);
  const pathname = url.pathname;
  const search = url.search;
  // convert the search params to an object
  const queryParams = queryStringToObject(search);
  // render the view with the pathname and object
  renderView(pathname, queryParams);
}



// laranja = parametro
// verde = função
// rosa = palavras reservadas da linguagem
// branca = varaveis
// roxa = constante
