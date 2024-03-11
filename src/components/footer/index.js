//import styles from "./style.css" assert {type:"css"};
//const style = require("./style.css");
export const renderFooter = () =>{

    const devs = document.createElement('p');
    devs.textContent = "Camila e Fabine";
    return devs
    const footer = document.querySelector("footer");
    footer.innerHTML = `
    <p> Camila e Fabine </p>
   `
}