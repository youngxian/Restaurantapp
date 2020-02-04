import { aboutbox } from "./tabbox";

const rowbox = document.createElement("div");
rowbox.classList.add('row');
const aboutboxx = document.createElement("div");
const eachbox = document.createElement("div");


const aboutboxi = function(heading, content) {
    const abouthead = document.createElement("h1");
    eachbox.classList.add("col-lg-3");
    abouthead.textContent = "About us";

    aboutboxx.classList.add('aboutboxx');
    const title = document.createElement("h1");
    const text = document.createElement("p");

    title.textContent = heading;
    text.textContent = content;

    aboutboxx.append(title, text);
    eachbox.appendChild(aboutboxx);
}


const rowin = function() {
    aboutboxi("Professional Chef", "We have india's top chefs to ensure to quality of the food. Her height rationle and he of catch life motivator");
    aboutboxi("Professional Chef", "We have india's top chefs to ensure to quality of the food. Her height rationle and he of catch life motivator");
    aboutboxi("Professional Chef", "We have india's top chefs to ensure to quality of the food. Her height rationle and he of catch life motivator");
    rowbox.appendChild(eachbox);
    aboutbox.appendChild(rowbox);
}

export { rowin }