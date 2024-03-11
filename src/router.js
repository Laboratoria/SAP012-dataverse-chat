


// setRootEl, setRoutes, renderView e onURLChange.

// Considere escrever testes paralelos para cada função para entender melhor sua intenção.


let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
    rootEl = el; // assign rootEl
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object:   
    //if (typeof routes !== 'object') {
    //throw new Error('Routes must be an object.');
    //}

  // optional Throw errors if routes doesn't define an /error route
    //if (!routes['/error']) {
    //throw new Error('Routes must define an /error route.');
    //}

  ROUTES = routes;// assign ROUTES
}

const renderView = (pathname, props={}) => {
  rootEl.innerHTML='';// Limpa o elemento raiz (root element)
  const view = ROUTES[pathname] || ROUTES['/error'];//Encontra a visualização correta com base no pathname in case not found render the error view
  const viewElement = createViewElement(view, props);//Renderiza a visualização correta com os props
  rootEl.appendChild(viewElement);//Adiciona o elemento da visualização ao DOM root element
} 

export const onURLChange = (location) => {
  const { pathname, searchParams } = parseLocation(location);// Analisa a localização para obter o pathname e os parâmetros de pesquisa
  const queryParams = convertSearchParamsToObject(searchParams);// Converte os parâmetros de pesquisa em um objeto (se houver)
  renderView(pathname, queryParams);// Renderiza a visualização com o pathname e o objeto de parâmetros
};




// linkEl.addEventListener('click', () => navigationTo("/about", { nome: "Xochitl" }))