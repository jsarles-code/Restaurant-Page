function loadContact() {
    const content = document.getElementById('content');

    // Clear current content
    content.innerHTML = '';

    // Create and append the contact headline
    const contactHeadline = document.createElement('h1');
    contactHeadline.textContent = 'Contact Us';
    content.appendChild(contactHeadline);

    // Contact information
    const phone = document.createElement('p');
    phone.textContent = 'Phone: +123 456 7890';

    const address = document.createElement('p');
    address.textContent = 'Address: 1234 Street Name, City, Country';

    // Append contact information
    content.appendChild(phone);
    content.appendChild(address);
}

export default loadContact;
