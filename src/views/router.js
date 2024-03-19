let ROUTES = {};
let rootEl;
let pathname = URL;
export const setRootEl = (viewEl) => {
  rootEl = viewEl; //o root do "momento"
};
export const navigateTo = (pathname, props) => {
  window.history.pushState(pathname);

  renderView(props.id);
};

export const renderView = (props) => {
  rootEl.innerHTML = "";
  const pathname = window.location.pathname;
  const routeHandler = ROUTES[pathname] || ROUTES["/404"];
  const viewAtualizada = routeHandler(props);
  rootEl.appendChild(viewAtualizada);
  };

export const setRoutes = (routes) => {
  if (typeof routes !== "object") {
    throw new Error("A rota deve ser um objeto.");
  }
  ROUTES = routes;
};
export const onURLChange = (location) => {
 
  const url = new URL (location);

  const queryParams = Object.fromEntries(url.searchParams.entries());

  renderView(url.pathname, { queryParams });
};
