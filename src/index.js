console.log("hello");
// menu berguer
var menu_overlay = new Boolean("false")
console.log(menu_overlay);
document.getElementById("Nav-overlay").style = 'opacity: 0; display: none;';

//detecter ke clique
document.getElementById("spy-me").onmousedown = function () {
  menu_overlay = !menu_overlay;

  if (menu_overlay == false) { // on vois
    document.getElementById("Nav-overlay").style = 'opacity: 1; display: block;';
  }
  if (menu_overlay == true) { // on vois pas
    document.getElementById("Nav-overlay").style = 'opacity: 0; display: none;';
  }
};
