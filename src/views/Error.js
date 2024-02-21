export function errorView(props) {
  const element = document.createElement('div');
  const image = document.createElement('img');
  image.src = '../assets/imgError.jpeg';
  image.alt = `Imagem de erro para ${props.img}`;
  element.appendChild(image);

  return element;
}

export default errorView;
