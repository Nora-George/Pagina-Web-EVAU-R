const menu = document.querySelector('.menu');
const menus = document.querySelector('.menu-navegacion');

console.log(menus);
console.log(menu);

menu.addEventListener('click', () => {
    menus.classList.toggle("spread")
})
window.addEventListener('click', e => {
    if(menus.classList.contains('spread') && e.target != menus && e.target != menu){
        menus.classList.toggle("spread")
    }
})