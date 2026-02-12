// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// Sticky Navbar Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.add('py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('shadow-md');
            navbar.classList.remove('py-2');
            navbar.classList.add('py-4');
        }
    }
});