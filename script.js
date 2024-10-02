function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`No element found for ${elementSelector} with instance ${instance}`);
    }
}

const linkProjets = document.getElementById("linkProjets");
const linkCV = document.getElementById("linkCV");
const linkDiplomes = document.getElementById("linkDiplomes");
const linkApropos = document.getElementById("linkApropos");

linkProjets.addEventListener('click', () => {
    scrollToElement('.header', 0); // Scrolls to the first .header (Mes Projets)
});

linkCV.addEventListener('click', () => {
    scrollToElement('.header', 1); // Scrolls to the second .header (Mon CV)
});

linkDiplomes.addEventListener('click', () => {
    scrollToElement('.diplos'); // Scrolls to Mes diplômes section
});

linkApropos.addEventListener('click', () => {
    scrollToElement('.about'); // Scrolls to A propos section
});
