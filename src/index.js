import { setRootEl, setRoutes, onURLChange } from "./router.js";
import { renderFooter } from './components/footer/index.js';
/*import { renderButtons } from './components/buttons/index.js';
import { homePage } from "./views/homePage/index.js";
import { profile } from "./views/profile/index.js";
import { individualChat } from "./views/individualChat/index.js";
import { groupChat } from "./views/groupChat/index.js";
import { error } from "./views/error/index.js";*/


/*const routes = {

  "/homePage": homePage,
  "/profile": profile,
  "/individualChat": individualChat,
  "/groupChat": groupChat,
  "/error": error
};*/

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const footer = document.querySelector("footer");
  footer.appendChild(renderFooter());
  //footer.innerHTML = `${renderFooter()}`;
  renderFooter();

 /*const buttons = document.querySelector("buttons");
  footer.appendChild(renderButtons());
  renderButtons();*/


  setRootEl(root);


  setRoutes(routes);


  onURLChange();
});