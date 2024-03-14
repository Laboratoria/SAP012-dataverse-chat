import { setRootEl, setRoutes, onURLChange } from "./router.js";

import { renderFooter } from './components/footer/index.js';
import { renderHeader } from './components/header/index.js';

import { homePage } from "./views/homePage/index.js";
import { profile } from "./views/profile/index.js";
import { individualChat } from "./views/individualChat/index.js";
import { groupChat } from "./views/groupChat/index.js";
import { error } from "./views/error/index.js";


//import { renderAboutMe } from './components/aboutMe/index.js';
//import { renderButtons } from './components/buttons/index.js';
//import { renderCards } from './components/cards/index.js';
//import { renderChatBanner } from './components/chatBanner/index.js';
//import { renderChatBox } from './components/chatBox/index.js';
//import { renderChatButton } from './components/chatButton/index.js';
//import { renderFilters } from './components/filters/index.js';
//import { renderMembersChat } from './components/membersChat/index.js';
//import { renderMembersList } from './components/membersList/index.js';
//import { rendertextArea } from './components/textArea/index.js';


const routes = {
  "#homePage": homePage,
  "#profile": profile,
  "#individualChat": individualChat,
  "#groupChat": groupChat,
  "#error": error
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const footer = document.querySelector("footer");
  footer.appendChild(renderFooter());

  const header = document.querySelector("header");
  header.appendChild(renderHeader());

  setRootEl(root);

  setRoutes(routes);

  onURLChange();
});

window.addEventListener("hashchange", (event) => {
  onURLChange(event.target.location)
})