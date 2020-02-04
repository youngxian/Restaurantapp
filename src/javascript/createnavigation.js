 const navigation = document.createElement('nav');
 const navlogo = document.createElement('div');
 navlogo.textContent = "Lettuce Restaurant";
 const navmenu = document.createElement('ul');
 navmenu.classList.add('navbar');
 navlogo.classList.add('navlogo');

 //nav styling
 navigation.classList.add('navigation')

 navigation.appendChild(navlogo);
 navigation.appendChild(navmenu);


 const nav = function(item) {
     const navlist = document.createElement('li');
     navlist.style.listStyleType = 'none';
     const navitems = document.createElement('div');
     navitems.textContent = item;
     navitems.classList.add('nav-items');

     navlist.appendChild(navitems);
     navmenu.appendChild(navlist);
 }
 document.body.append(navigation);
 export { nav };