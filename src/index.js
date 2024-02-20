import home from "./views/Home.js";
import chat from "./views/Chat.js";
import chatGroup from "./views/ChatGroup.js";
import errorView from "./views/Error.js";
import { setRootEl, setRoutes, onURLChange, navigateTo } from "./router.js"

const routes = {
  "/": home,
  "/chat": chat,
  "/chatGroup": chatGroup,
  "/error": errorView
}

//seletor
const root = document.getElementById("root");
const link = document.getElementById("link")

//Listerner
link.addEventListener('click', () => {
  let pathname = "/"
  if (window.location.pathname === "/") {
    pathname = "/chat"
  }else if (window.location.pathname === "/chat") {
    pathname = "/chatGroup"
  }else {
    pathname = "/"
  }
  // alert("Alerta")
  navigateTo(pathname)
});

window.addEventListener('popstate', () => {
  onURLChange(window.location);
});

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(root);
  onURLChange(window.location);
});


//chamando as funções
setRoutes(routes);
