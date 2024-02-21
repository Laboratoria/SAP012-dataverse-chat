# **MARCO 1:** SPA

Bem-vinda ao primeiro marco do seu aprendizado em JavaScript através de projetos. Neste marco, você começará construindo uma [SPA](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica) (Single Page Application).

## Tarefas deste marco

- [Protótipo de Dataverse](#prototipo-de-dataverse)
- [SPA parte 1](#spa-parte-1)

### Protótipo de Dataverse

Projete as visualizações da página inicial, onde serão apresentados os elementos do seu conjunto de dados, bem como as visualizações de Chat Individual e Chat em Grupo. A premissa é otimizar e reutilizar o design do protótipo do projeto anterior, incorporando exclusivamente a visualização de chat individual e/ou chat em grupo, evitando a necessidade de reinventá-lo.

É fundamental que a sua proposta visual não apenas reflita a essência da sua solução ideal, mas também siga estritamente os princípios fundamentais do [design visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Diseno-de-interfaces_suOT7#_luWsQ).

> [!TIP]
> Use a identidade visual ou o protótipo do seu projeto anterior.

### SPA parte 1

O propósito principal deste marco é permitir que você desenvolva
uma **SPA (Single Page Application)**. Em poucas palavras, a ideia
é que, por meio do JavaScript, você possa modificar o conteúdo do
seu navegador de forma semelhante a alternar entre diferentes
visualizações. Cada uma dessas visualizações estaria associada a uma URL,
o que significa que não apenas o conteúdo seria alterado,
como também o endereço na barra de endereços do
seu navegador. Para obter informações sobre o que é uma SPA e
conhecer todos os seus detalhes, convidamos você a visitar este
[guia](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.pt.md).

2. Criar a vista **Home.js**

   Define `Home.js` na pasta `src/views` e,
   em seu interior, crie uma função encarregada de
   gerar o conteúdo da vista. Esta função
   deve retornar um elemento DOM para que possa ser
   utilizado pelo router. [Aqui](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.pt.md#1-configure-sua-estrutura-html)
   você pode consultar o exemplo de duas funções,
   cada uma representando uma vista.

   **Nota 📝: É comum que você precise repetir este processo para
   cada uma das vistas que você precisar durante o
   desenvolvimento**

3. Codifique o router

    Para vincular as rotas e vistas em uma
    aplicação, precisaremos definir algumas
    funções em um novo arquivo `src/router.js`.
    Essas funções ajudarão a controlar a
    navegação entre páginas. Veja a seção
    [Codifique o roteador](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.pt.md#3-codifique-o-router)
    do guia, onde você encontrará seis funções. Para o
    propósito deste marco, recomendamos utilizar
    quatro delas: `setRootEl`, `setRoutes`,
    `renderView` e `onURLChange`.

    **Nota 📝:
    Para obter mais informações sobre o funcionamento
    e uso de cada uma das funções, consulte
    [esta seção do guia](https://github.com/Laboratoria/guide-router/tree/guide-v1?tab=readme-ov-file#api-de-router-b%C3%A1sico).**

4. Configure o router

    No seu arquivo `src/index.js`, inicialize o seu roteador definindo
    suas rotas e configurando o elemento raiz conforme mostrado
    no [guia](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.pt.md#3-codifique-o-router).

5. Gerencie o carregamento da página inicial

    Certifique-se de [gerenciar o carregamento](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.pt.md#5-lidar-com-o-carregamento-da-primeira-p%C3%A1gina)
    da página
    inicial chamando `onURLChange` com
    `window.location` no arquivo `src/index.js`.
    Teste para garantir que, independentemente da URL
    válida utilizada para iniciar sua SPA, **a vista correta** seja carregada adequadamente.

## Precisa de Ajuda?

Se em algum momento você tiver dúvidas ou perguntas durante o desenvolvimento deste projeto, não hesite em procurar ajuda! Lembre-se de que você pode contar com:

- **Documentação do Projeto:** Certifique-se de revisar cuidadosamente a documentação fornecida no [README](../README.md); especialmente as dicas, sugestões e leituras complementares.

- **Coaches:** Os coaches estão aqui para ajudar você. Se você enfrentar obstáculos que a documentação não resolve ou se precisar de uma explicação mais detalhada, não hesite em solicitar uma OH ou nos enviar uma mensagem pelo Slack.

[👈Todos os marcos](../README.md#6-marcos)
