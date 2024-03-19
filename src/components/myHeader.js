class MyHeader extends HTMLElement {
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
    h1{
      font-family: "Raleway", sans-serif;
      font-size: 24px;
    font-weight: 200;
    margin-top: 80px;
    text-align: center;
    color: #574755;}
    ralewayuniquifier {
     font-family: "Raleway", sans-serif;
     font-optical-sizing: auto;
     font-weight: weight;
     font-style: normal;
   }
    }
    </style>
        <h1>Conheça um novo hobby e converse com uma especialista!</h1>
        `;
  }
}
customElements.define("my-header", MyHeader);
