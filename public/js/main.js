var 
boton=document.querySelector(".header__icono")
var 
menu=document.querySelector(".header__navigation")


boton.addEventListener("click" , () =>{
    menu.classList.toggle("header__navigation--active")
});