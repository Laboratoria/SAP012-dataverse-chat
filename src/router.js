let ROUTES = {};
let rootEl;

//função iniciada com SET faz atribuição de valor
export const setRootEl = (element) => {
  rootEl = element;
};

export const setRoutes = (routes) => {
  ROUTES = routes
};

const queryStringToObject = (props) => {
  const urlParams = new URLSearchParams (props);
  return Object.fromEntries(urlParams)
};

export const renderView = (pathname, props = {name: " ", id: " "}) => {
  rootEl.textContent = ""
  let routeFunc = ROUTES[pathname]
  if (!routeFunc) {
    routeFunc = ROUTES["/error"]
  }

  const params = queryStringToObject(props)
  const element = routeFunc(params);
  rootEl.appendChild(element);
};

export const navigateTo = (pathname = "/", props = { name: " ", id: " "}) => {
  window.history.pushState(null, null, pathname);
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  renderView(location.pathname, location.search);
};
