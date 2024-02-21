import { renderItems } from "./Home.js";
import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";
import data  from '../data/dataset.js';

const movieCard = document.querySelector("#root");
const btnLimpar = document.querySelector("#btn-limpar");
const order = document.querySelector("#order");
const filters = document.querySelector("#filters");
const titlesLength = document.querySelector(".titles_length");
const imgBanner = document.querySelector(".header-image");

function alterarBanner() {
  const larguraJanela = window.innerWidth;
  if (larguraJanela < 550) {
    imgBanner.src = 'img/banner-mobile.png';
  }
}

window.onload = alterarBanner;
window.onresize = alterarBanner;

let movieData = [...data];

document.addEventListener("DOMContentLoaded", () => {
  totalMovies(data);
  movieCard.appendChild(renderItems(data));
})

order.addEventListener("change", (e) => {
  const orderValue = e.target.value;
  movieData = sortData(movieData, "imDbRating", e.target.value);
  if (orderValue === "asc") {
    movieData = sortData(movieData, "imDbRating", "asc");
  }
  else if (orderValue === "desc") {
    movieData = sortData(movieData, "imDbRating", "desc");
  }
  movieCard.innerHTML = "";
  movieCard.appendChild(renderItems(movieData));
})

filters.addEventListener("change", (e) => {
  const value = e.target.value;
  if (value === "Todos") {
    movieData = [...data];
  } else {
    movieData = filterData(data, "movieGender", value);
  }
  movieCard.innerHTML = "";
  totalMovies(movieData);
  movieCard.appendChild(renderItems(movieData));
})

const totalMovies = (data) => {
  const numberOfMovies = computeStats(data);
  titlesLength.innerText = `${numberOfMovies} títulos`;
}

btnLimpar.addEventListener("click", () => {
  movieData = [...data];
  totalMovies(data);
  movieCard.innerHTML = "";
  filters.value = "Todos";
  order.value = "todos";
  movieCard.appendChild(renderItems(data));
})
