

export const header = () => {
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
    `;
    
  return headerEl;

}

