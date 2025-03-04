// Henter alle accordion header
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Tilføjer event listener til hver accordion header
accordionHeaders.forEach(header => {
    header.addEventListener('click', toggleAccordion);
});

// Funktion til at toggle accordion
function toggleAccordion(event) {
    const content = event.currentTarget.nextElementSibling; // Finder det tilhørende indhold til den enkelte accordion header, der trykkes på
    content.classList.toggle('visMenu'); // Åbner eller lukker menuen (aktivere/slukker for classen visMenu)

    const icon = event.currentTarget.querySelector('.icon'); 
    icon.classList.toggle('menuAaben'); // Tilføj en CSS-animation til ikonet
}