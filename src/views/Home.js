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

  return el;
}

