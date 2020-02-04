const jumbotron = document.createElement('div');
const jumbotext = document.createElement('div');
const explorebtn = document.createElement('button');
explorebtn.textContent = "Explore our menu";
explorebtn.classList.add('btn', 'explorebtn')
const popup = document.createElement('div');
popup.classList.add('popup');
popup.classList.add('d-none');

jumbotext.innerHTML = "<h1>Drink, Food & Enjoy</h1><p>Mealwise lets you get the food by the best chefs without waiting <br> Eat what you love and save your time for something cool</p>";
// const jumboheading = document.createElement('h1');
jumbotext.appendChild(explorebtn);
jumbotron.appendChild(jumbotext);
jumbotron.classList.add('jumbotron');
jumbotext.classList.add('text-center')
document.body.appendChild(jumbotron);
jumbotron.appendChild(popup);

export {
    popup
}