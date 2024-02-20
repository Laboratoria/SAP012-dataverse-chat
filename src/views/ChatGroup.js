export function chatGroup(props) {
  const element = document.createElement('div');
  element.textContent = `Bem vindo a página Chat em Grupo ${props.name}!`;
  return element;
}

export default chatGroup;
