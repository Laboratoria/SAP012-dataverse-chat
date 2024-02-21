// export const home = (props) => {
//   const element = document.createElement('div');
//   element.textContent = `Bem vindo a página de início ${props.name}!`;
//   return element;
// }


import data  from '../data/dataset.js';
// import About from './About.js'
// import { renderView } from '../router';
// import { filterData } from '../lib/dataFunctions.js';

export function Home(props) {
  const viewEl = document.createElement('div');
  viewEl.appendChild(renderSubTitle())
  viewEl.appendChild(renderFilter())
  viewEl.appendChild(renderItems(data))
  return viewEl;
}

export default Home;


export const renderItems = (data) => {
  const ul = document.createElement('ul');
  ul.classList.add('container__card');

  data.forEach((item) => {
    ul.innerHTML += `
      <li itemscope itemtype="OsMelhoresFilmes" class="container__card">
        <div class="content__card">
          <dl itemscope itemtype="#">
            <dt><img src="${item.imageUrl}" alt="Imagem do Filme" itemprop="${item.name}" class="image__card" /></dt>
            <dd itemprop="sort-order" class="imDbRating">${item.facts.imDbRating} /10 <img src="./img/icon-star.svg" alt="Star icon" /></dd>
            <dd itemprop="name" class="name__card">${item.name}</dd>
            <dd itemprop="releaseYear" class="releaseYear">${item.facts.releaseYear} - ${item.facts.runtimeStr}</dd>
            <!--<dd itemprop="runtimeStr" class="runtimeStr">${item.facts.runtimeStr}</dd>-->
            <dd itemprop="shortDescription" class="shortDescription">${item.shortDescription}</dd>
            <dd itemprop="movieGender" class="movieGender">${item.facts.movieGender}</dd>
            <button class='btn-verMais'><dt>Ver mais</dt><dd itemprop="verMais"></dd></button>
          </dl>
        </div>
      </li>
    `;
  });

  return ul;
};



export const renderFilter = () => {
  const divFilter = document.createElement('div');
  divFilter.classList.add('filtros');

  divFilter.innerHTML += `
      <section class="section-search">
          <label for="filters" id="search-filters" class="filters">Filtrar por:</label>
          <select id="filters" name="search-filter" data-testid="select-filter">
            <option value="Todos" selected hidden disabled>Gênero</option>
            <option value="drama">Drama</option>
            <option value="policial">Policial</option>
            <option value="aventura">Aventura</option>
            <option value="fantasia">Fantasia</option>
            <option value="biografia">Biografia</option>
            <option value="romance">Romance</option>
            <option value="syfy">Syfy</option>
            <option value="faroeste">Faroeste</option>
            <option value="crime">Crime</option>
          </select>
        <label for="order">Ordenar por:</label>
        <select id="order" name="sort-order" data-testid="select-sort">
            <option value="todos" hidden disabled>★</option>
            <option value="desc">Maior Nota</option>
            <option value="asc">Menor Nota</option>
        </select>

        <button id="btn-limpar" data-testid="button-clear">Limpar Filtros</button>
    </section>


      `;

  return divFilter;
};

export const renderSubTitle = () => {
  const divSubTitle = document.createElement('div');
  divSubTitle .classList.add('container__text');

  divSubTitle.innerHTML += `
      <h1>Principais escolhas</h1>
      <h2>O que assistir</h2>
      <p>Os melhores filmes para você assistir.</p>
      <span class="titles_length"> títulos</span>
      <button type="button">Key API</button>
      `;

  return divSubTitle;
};
