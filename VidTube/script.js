var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".side-bar");

menuIcon.onClick = function(){
    sideBar.classList.toggle("small-sidebar");
}

