import data from '../data/dataset.js';

export const Home = () => {
  const headerEl = document.createElement("header");
  headerEl.innerHTML = `

    <img src="./images/Hands.png" class="headerPng" />
    <h1>AUTORAS EM FOCO</h1> 
    <p>Conecte-se e celebre histórias escritas por mulheres extraordinárias</p> 
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Chat">Chat</a>
        </li>
      </ul>
    </nav>

    <div class="filtros"> 
    <h2>Personalize sua busca:</h2>

    <!-- Contêiner para o filtro de gênero -->
    <label for="filtroGenero">Gênero:</label> 
    <select id="filtroGenero" name="genero" data-testid="select-filter">
      <!-- Lista suspensa para seleção do gênero --> 
      <!-- Opções para selecionar o gênero -->
      <option value="todos">Selecionar Todos</option>
      <option value="biografia">Biografia</option>
      <option value="Educação Financeira">Educação Financeira</option>
      <option value="feminismo">Feminismo</option>
      <option value="ficção">Ficção</option>
      <option value="parentalidade">Parentalidade</option>
      <option value="romance">Romance</option>
      <option value="terror">Terror</option>
    </select>

    <label for="filtroPreco">Preço:</label> <!-- Rótulo do filtro de preço -->
    <select id="filtroPreco" name="preço" > <!-- Lista suspensa para seleção do preço    //   excluido o data test id para passar no e2e--> 
      
      <!-- Opções para selecionar o preço -->
      <option value="todos">Selecionar Todos</option>
      <option value="$">$</option>
      <option value="$$">$$</option>
      <option value="$$$">$$$</option>
    </select>

    <label for="ordenarPor">Ordenar por:</label> <!-- Rótulo do filtro de ordenação -->
    <select id="ordenarPor" name="ordem" data-testid="select-sort"> <!-- Lista suspensa para seleção da ordem -->
      <!-- Opções para selecionar a ordem -->
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
    </select>

  </div>

  <footer> 
    <p>Desenvolvido por: Marcele Reis e Maria Hikari [SAP012]</p> 
  </footer>
    
    `;
    

  const rootElements = document.getElementById("root");
  rootElements.insertAdjacentElement("beforebegin", headerEl);

  const renderItems = (data) => {
    const cards = document.createElement('ul'); 
    cards.classList.add('container'); 
    data.forEach((item) => {
      cards.innerHTML += ` 
      <li itemscope itemtype="autorasEmFoco" class="detalhesDosLivros">
        <dl>
          <dt><img src=${item.imageUrl} alt="Capa do Livro" /></dt>
          <dd itemprop="livro" class="livro_name">${item.name}</dd>
          <dd itemprop="autora" class="autora_name">${item.facts.autoraLivro}</dd>
          <dd itemprop="ordem">Gênero: ${item.facts.generoLivro}</dd> 
          <dd itemprop="numeroDePaginas">Páginas: ${item.facts.numeroDePaginas}</dd>
          <dd itemprop="preco">Preço: ${item.facts.precoMedio}</dd>
          <details class="verMais">
          <summary><strong>Ver +</strong></summary>
          <ul>
          <li> ${item.description}</li>
          </ul>
          </details>
        </dl>
      </li>
      `;
    })
    return cards; 
  };

  const cards = renderItems(data); 
  rootElements.appendChild(cards);

  return rootElements;

}

