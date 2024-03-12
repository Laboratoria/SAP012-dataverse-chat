import { data } from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';

const Home = (props) => {
    const el = document.createElement("h1");
    el.innerHTML = "Eu sou a página inicial";
    return el;
  }

  