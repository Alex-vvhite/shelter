const burger = document.querySelector('.hamburger');
if (burger){
    const menu = document.querySelector('.header-menu');
    const header_logo = document.querySelector('.header_items');
    const items_logo = document.querySelector('.item_logo');
    burger.addEventListener("click", ()=>{
        document.body.classList.toggle('_lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active-menu');
        header_logo.classList.toggle('active-header');
        items_logo.classList.toggle('active-item');
    })
}