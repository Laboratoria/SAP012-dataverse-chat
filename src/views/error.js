const errorView = () => {
    const errorPage = document.createElement('div');
    errorPage.classList.add('error-page');
  
    // Conteúdo da página de erro
    errorPage.innerHTML = `
      <h1>Erro 404 - página não encontrada</h1>
    `;
  
    return errorPage;
  }
  
  export default errorView;