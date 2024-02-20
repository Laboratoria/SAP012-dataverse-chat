export function errorView(props) {
  const element = document.createElement('div');
  element.textContent = `Error page ${props.name}`;
  return element;
}

export default errorView;
