function loadHome() {
    const content = document.getElementById('content');
  
    // Clear current content
    content.innerHTML = '';
  
    // Create and append the headline
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant!';
    content.appendChild(headline);
  
    // Create and append a paragraph
    const para = document.createElement('p');
    para.textContent = 'Enjoy the best dishes with the finest ingredients.';
    content.appendChild(para);
  
    // Optionally, add more elements like images, more text, etc.
  }
  
  export default loadHome;
  