const btnMenu = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu');
const sections = document.querySelectorAll('.section');
const menuItems = document.querySelectorAll('.nav_menu-link');
const link = document.querySelector('#link');

btnMenu.addEventListener('click', toggleMenu)
function toggleMenu() {
    navMenu.classList.toggle('nav_menu-visible');
}

link.addEventListener('click', toggleLink);
function toggleLink() {
    navMenu.classList.toggle('nav_menu-visible');
}

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('header_bar', window.scrollY>0)
})

const functionObserver = entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const itemActive = Array.from(menuItems).find(item => item.dataset.url === entry.target.id);
            itemActive.classList.add('nav_menu-link_active');
            for (const item of menuItems) {
                if(item != itemActive) {
                    item.classList.remove('nav_menu-link_active');
                }
            }
        }
    })
}

const observer = new IntersectionObserver(functionObserver, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
})

sections.forEach(seccion => {
    observer.observe(seccion);
});
