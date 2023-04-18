const btnMobile = document.getElementById('btn');

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
    
    const btn = document.getElementById('btn');
    btn.classList.toggle('close');
}
btnMobile.addEventListener('click', toggleMenu);