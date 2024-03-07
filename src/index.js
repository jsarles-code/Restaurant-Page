console.log('Webpack is working!');
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});

// Tab event listeners
document.getElementById('home').addEventListener('click', loadHome);
document.getElementById('menu').addEventListener('click', loadMenu);
document.getElementById('contact').addEventListener('click', loadContact);
