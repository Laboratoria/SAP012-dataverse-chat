import Home from "./views/Home.js";
import Chat from "./components/Chat.js";
import ChatGroup from "./components/ChatGroup.js";
import ErrorView from "./views/Error.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js"

const routes = {
  "/": Home,
  "/chat": Chat,
  "/chatGroup": ChatGroup,
  "/error": ErrorView
}

//seletor
const root = document.getElementById("root");
// const link = document.getElementById("link")

//Listerner
// link.addEventListener('click', () => {
//   let pathname = "/"
//   if (window.location.pathname === "/") {
//     pathname = "/chat"
//   }else if (window.location.pathname === "/chat") {
//     pathname = "/chatGroup"
//   }else {
//     pathname = "/"
//   }
//   // alert("Alerta")
//   navigateTo(pathname)
// });

window.addEventListener('popstate', () => {
  onURLChange(window.location);
});

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(root);
  onURLChange(window.location);
});


//chamando as funções
setRoutes(routes);
