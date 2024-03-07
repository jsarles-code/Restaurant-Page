console.log('Webpack is working!');
import loadHome from './home';
// Future imports for other tabs like import loadMenu from './menu';

document.addEventListener('DOMContentLoaded', () => {
  loadHome(); // Load the home page content by default
});

// Event listeners for each tab
document.getElementById('home').addEventListener('click', loadHome);
// Future event listeners for other tabs
// document.getElementById('menu').addEventListener('click', loadMenu);
