export function Chat(props) {
  const element = document.createElement('div');
  element.textContent = `Bem vindo a página Chat ${props.name}!`;
  return element;
}

export default Chat;
