    let searchIcon = document.querySelector("#search-icon");
    let menu = document.querySelector(".header-menu .menu");
if(searchIcon)
{
    searchIcon.addEventListener(click,()=>{
        menu.classList.add('.drop');
    });
}
if(window.onscroll()){
    menu.classList.remove('.drop');
}