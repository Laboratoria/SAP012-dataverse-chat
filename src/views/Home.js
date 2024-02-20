export const home = (props) => {
  const element = document.createElement('div');
  element.textContent = `Bem vindo a página de início ${props.name}!`;
  return element;
}
export default home;

