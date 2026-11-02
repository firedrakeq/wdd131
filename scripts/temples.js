// Dom Reference Selections
const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('nav');
const currentYearSpan = document.querySelector('#current-year');
const lastModifiedParagraph = document.querySelector('#last-modified');

// 1. Mobile Menu Toggling Logic
menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    
    // Toggle between the hamburger icon and 'X' close symbol
    if (navigation.classList.contains('open')) {
        menuButton.textContent = '❌';
    } else {
        menuButton.textContent = '☰';
    }
});

// 2. Dynamic Footer Content Population
// Extract and inject current calendar year structure
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Extract and dynamically output the document last modified date metadata
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
