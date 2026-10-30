// Zoek het formulier
const contactForm = document.querySelector("#contact-form");

// Luister naar het verzenden van het formulier
contactForm.addEventListener("submit", function(event) {

    // Voorkom dat het formulier direct wordt verzonden
    event.preventDefault();

    // Zoek het e-mailveld
    const emailInput = document.querySelector("#email");

    // Lees het ingevulde e-mailadres uit
    const emailValue = emailInput.value;

    // Toon het e-mailadres in de console
    console.log(emailValue);

});