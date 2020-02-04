import image from "../image/image.jpg";
import { menubox } from "./tabbox";




const card = document.createElement('div');

const row = document.createElement('div');

row.classList.add('row');
const menutitle = document.createElement('h4');
menutitle.textContent = "Our Menu";

const eachcard = function(img, title, price, subtitle) {
    const colsthree = document.createElement('div');
    const newimg = document.createElement('img');
    const titletext = document.createElement('p');
    const titleheading = document.createElement('h6');
    const pricetag = document.createElement('h3');
    const eachcard = document.createElement('div');

    newimg.classList.add('img-menu');
    titletext.textContent = subtitle;
    titleheading.textContent = title;
    pricetag.textContent = price;

    const cardbody = document.createElement('div');


    cardbody.classList.add("cardtext");
    eachcard.classList.add("cardbody");

    newimg.src = img;
    newimg.classList.add('w-100');
    colsthree.classList.add('col-lg-3');


    cardbody.append(titleheading, titletext, pricetag);
    eachcard.append(newimg, cardbody);
    colsthree.appendChild(eachcard);
    row.appendChild(colsthree);
}

const eachrow = function() {
    eachcard(image, "Lion's Head", "$210", "Chicken Masala + Sawya Sauce");
    eachcard(image, "Bombay Duck", "$50", "Chicken Masala + Sawya Sauce");
    eachcard(image, "Praire Oysters", "$90", "Chicken Masala + Sawya Sauce");
    eachcard(image, "Sweetbreads", "$80", "Chicken Masala + Sawya Sauce");
    eachcard(image, "Ants Climbing a Tree", "$210", "Chicken Masala + Sawya Sauce");
    eachcard(image, "Colonial Goose", "$140", "Chicken Masala + Sawya Sauce");
    eachcard(image, "Nun's Puffs", "$22", "Chicken Masala + Sawya Sauce");
    eachcard(image, "Sandwish", "$80", "Chicken Masala + Sawya Sauce");
    menubox.append(menutitle, row);
}


export { eachrow }