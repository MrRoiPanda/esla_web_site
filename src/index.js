console.log("hello");
// menu berguer
var menu_overlay = new Boolean("false")
console.log(menu_overlay);

var overlay = document.getElementById("Nav-overlay");
var berguer = document.getElementById("nav-icon");
var content = document.getElementsByClassName("fade-page-in");
//var links = document.getElementsByClassName("nav-menu-link");

//detecter le clique
berguer.onclick  = function () {
  menu_overlay = !menu_overlay;

  if (menu_overlay == false) { // on vois
    overlay.style = 'opacity: 1; display: block;';
    berguer.classList.add("open");
    content.style = 'opacity: 0;';
  }
  if (menu_overlay == true) { // on vois pas
    content.style = 'opacity: 1;';
    berguer.classList.remove("open");
    overlay.style = 'opacity: 0; display: none;';
  }
};
