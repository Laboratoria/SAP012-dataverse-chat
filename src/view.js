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
