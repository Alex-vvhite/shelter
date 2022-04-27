const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.header-menu');
const header_logo = document.querySelector('.header_items');
const items_logo = document.querySelector('.item_logo');
const burger_color = document.querySelector('colo-burger');
if (burger){
    burger.addEventListener("click", ()=>{
        document.body.classList.toggle('_lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active-menu');
        header_logo.classList.toggle('active-header');
        items_logo.classList.toggle('active-item');
    })

}

if(burger.classList.contains('active')){
    menu.classList.remove('active-menu');
    header_logo.classList.remove('active-header');
    items_logo.classList.remove('active-item');
    document.body.classList.remove('_lock');
}




