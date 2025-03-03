window.addEventListener('scroll', function() {
    var header = document.getElementById('site-header');
    if (window.scrollY > 600) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".scrolling-track");
    const items = ["#NoBuzzNoPressure", "/img/ZBLogoSort.png"];
  
    // Function to create an item container (ensuring text & image align properly)
    function createItem(textOrImg) {
      const container = document.createElement("div");
      container.classList.add("scrolling-item");
  
      if (textOrImg.includes(".png")) {
        const img = document.createElement("img");
        img.src = textOrImg;
        img.alt = "ZB Logo";
        img.classList.add("scrolling-logo");
        container.appendChild(img);
      } else {
        const span = document.createElement("span");
        span.textContent = textOrImg;
        span.classList.add("scrolling-text");
        container.appendChild(span);
      }
  
      return container;
    }
  
    // Function to populate the track with enough items to make scrolling seamless
    function populateTrack() {
      track.innerHTML = ""; // Clear existing content
  
      for (let i = 0; i < 10; i++) { // Create enough items to ensure smooth looping
        items.forEach(item => track.appendChild(createItem(item)));
      }
    }
  
    // Start populating and ensure continuous smooth scrolling
    populateTrack();
    
    // Make scrolling seamless using a JavaScript-powered infinite loop
    let scrollAmount = 0;
    function animateScroll() {
      scrollAmount -= 1;
      if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
        scrollAmount = 0; // Reset smoothly
      }
      track.style.transform = `translateX(${scrollAmount}px)`;
      requestAnimationFrame(animateScroll);
    }
  
    animateScroll(); // Start animation
  });
  
  // Countdown script
 
//Variable
const countdownDate = new Date("May 15, 2025 12:00:00").getTime(); //Måldato for nedtælling
const dage = document.getElementById("dage");
const timer = document.getElementById("timer");
const minutter = document.getElementById("minutter");
const sekunder = document.getElementById("sekunder");
 
 
function startCountdown(targetDate) {
 
  //Function der sørger for at nedtælling er opdateret
  function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
 
      if (timeLeft <= 0) {
          document.getElementById("countdown").innerHTML = "Tidspunktet er nået!";
          clearInterval(interval);
          return;
      }
 
      //beregning af de forskellige enheder (dage/timer/min/sek)
 
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
 
      //Indsætter de beregnede tal i HTML. De er sat i span for at kunne style dem i CSS
      dage.innerHTML =`<span class="tal">${days}</span>`;
      timer.innerHTML =`<span class="tal">${hours}</span>`;
      minutter.innerHTML =`<span class="tal">${minutes}</span>`;
      sekunder.innerHTML =` <span class="tal">${seconds}</span>`;
  
  }
 
  updateCountdown(); //Kalder funktionen updateCountdown
  const interval = setInterval(updateCountdown, 1000); //Kalder funktionen updateCountdown med et interval på 1 sekund (1000ms)
}
 
 
//Kalder funktionen ovenfor for at starte countdown og opdatere
startCountdown(countdownDate);