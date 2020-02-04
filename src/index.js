import 'bootstrap';
import './style.css';
import _ from 'lodash';
import { nav } from "./javascript/createnavigation";
import "./javascript/jumbotron";
import "./javascript/tabbox";
import { eachrow } from "./javascript/menubox";
import { rowin } from "./javascript/aboutbox"
import { menubox } from './javascript/tabbox';

nav("About");
nav("Menu");
nav("Contact");
eachrow();
rowin();

const navs = document.querySelectorAll('.nav-items');
const popping = document.querySelector('.popup');
const jumbotron = document.querySelector('.jumbotron');
const exitdiv = document.createElement('div');

const menubx = document.querySelector('.menubox');
const aboutbx = document.querySelector('.aboutbox');
const contactbx = document.querySelector('.contactbox');

exitdiv.classList.add('exitdiv', 'd-none');
jumbotron.appendChild(exitdiv);

for (let i = 0; i < navs.length; i++) {
    const navitem = navs[i];
    navs[i].addEventListener('click', () => {
        popping.classList.remove('d-none');
        exitdiv.classList.remove('d-none');

        if (navs[i].textContent == "About") {
            aboutbx.classList.remove('d-none');
            contactbx.classList.add('d-none');
            menubx.classList.add('d-none');

        } else if (navs[i].textContent == "Menu") {
            aboutbx.classList.add('d-none');
            contactbx.classList.add('d-none');
            menubx.classList.remove('d-none');

        } else if (navs[i].textContent == "Contact") {
            console.log("logir");
            aboutbx.classList.add('d-none');
            contactbx.classList.remove('d-none');
            menubx.classList.add('d-none');
        } else {

        }
    });
}

exitdiv.addEventListener('click', () => {
    popping.classList.add('d-none');
    exitdiv.classList.add('d-none');
});