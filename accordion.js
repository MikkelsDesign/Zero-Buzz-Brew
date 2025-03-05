// Henter alle accordion header
const accordionHeaders = document.querySelectorAll('.accordion-header');
const icon = document.getElementById('icon')

// Tilføjer event listener til hver header
accordionHeaders.forEach(header => {
    header.addEventListener('click', toggleAccordion);
});

// Funktion til at toggle accordion
function toggleAccordion(event) {
    const content = event.currentTarget.nextElementSibling; // Finder det tilhørende indhold
    content.classList.toggle('visMenu'); }// Åbner eller lukker menuen (aktivere/slukker for classen visMenu)