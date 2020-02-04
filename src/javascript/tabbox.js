import { popup } from "./jumbotron";


const menubox = document.createElement('div');
const aboutbox = document.createElement('div');
const contactbox = document.createElement('div');

menubox.classList.add('menubox');
aboutbox.classList.add('aboutbox');
contactbox.classList.add('contactbox');

popup.append(menubox, aboutbox, contactbox);

export { menubox, aboutbox, contactbox }