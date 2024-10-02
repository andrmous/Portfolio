function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const linkProjets = document.getElementById("linkProjets");
const linkCV = document.getElementById("linkCV");
const linkDiplomes = document.getElementById("linkDiplomes");
const linkApropos = document.getElementById("linkApropos");

linkProjets.addEventListener('click', () => {
    scrollToElement('.header');
});

linkCV.addEventListener('click', () => {
    scrollToElement('.header', 1);  // Example: scroll to the second .header
});

linkDiplomes.addEventListener('click', () => {
    scrollToElement('.column');
});

linkApropos.addEventListener('click', () => {
    scrollToElement('.about');
});
