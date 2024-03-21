class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
      footer{
            font-family: "Raleway", sans-serif;
              font-size: 14px;
              text-align: center;
            color: #422a55;
            margin-bottom: 4px;
            // width: 100%;
            background: #ddb6d8;
            }
        ralewayuniquifier {
            font-family: "Raleway", sans-serif;
            // font-optical-sizing: auto;
            font-weight: weight;
            font-style: normal;
        }
        </style>
      <footer>Desenvolvido com ♡ por Jéssica Ramos</footer>
          `;
  }
}

customElements.define("my-footer", MyFooter);
