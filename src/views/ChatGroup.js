export function ChatGroup(props) {
  const element = document.createElement('div');
  element.textContent = `Bem vindo a página Chat em Grupo ${props.name}!`;
  return element;
}

export default ChatGroup;
