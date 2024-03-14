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

