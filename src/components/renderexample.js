export const renderItems = (data) => {
    const listaHobby = document.createElement('ul');
    listaHobby.classList.add('container');
    
    const todosOsCards = data.map((item) => {
      return `
      <li itemscope itemtype="http://https://schema.org/HobbyShop" class="containerLi"> 
        <dl itemscope itemtype="#hobby">
          <dt><img src="${item.imageUrl}" alt="imagem do card" itemprop="${item.name}" class="imagem_card"  /></dt>
          <div class="textoCard">
          <div class="tituloHobby">
          <dd itemprop="name">${item.name}</dd><hr>
          </div>
          <dd  itemprop="sort-order" class="priceRange">Custo inicial: R$${item.facts.custoParaIniciar},00</dd>
          <dd itemprop="keywords"> Categoria: ${item.facts.categoriaHobby}</dd>
          <dd itemprop="description"> Material necessário: ${item.facts.materialNecessario}</dd>
          </div>
          </dl>
      </li>
      `;
    })
  
    listaHobby.innerHTML+=todosOsCards.join('');
    return listaHobby;
  };
  