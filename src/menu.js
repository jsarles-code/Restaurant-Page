function loadMenu() {
    const content = document.getElementById('content');

    // Clear current content
    content.innerHTML = '';

    // Create and append the menu headline
    const menuHeadline = document.createElement('h1');
    menuHeadline.textContent = 'Our Menu';
    content.appendChild(menuHeadline);

    // Example menu items (ideally, these would come from a more dynamic source)
    const menuItems = [
        { name: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.', price: '$15' },
        { name: 'Margherita Pizza', description: 'Simple yet delicious with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.', price: '$12' },
        // Add more items here
    ];

    // Create and append menu items
    menuItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menu-item');

        const name = document.createElement('h2');
        name.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.textContent = item.price;

        itemElement.appendChild(name);
        itemElement.appendChild(description);
        itemElement.appendChild(price);

        content.appendChild(itemElement);
    });
}

export default loadMenu;
