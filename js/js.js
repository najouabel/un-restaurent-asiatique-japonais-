var xx = document.querySelector(".burger-menu-list");
xx.style.display ="none";


function toggleMenu() {
    var x = document.querySelector(".burger-menu-list");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
var menu = document.querySelector(".burger-menu");
menu.addEventListener("click",()=> toggleMenu());