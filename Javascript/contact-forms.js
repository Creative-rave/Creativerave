const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    console.log(nameValue);
    console.log(emailValue);
    console.log(messageValue);
});

if (nameValue.trim() === "") {
    console.log("Vul je naam in.");

} else if (emailValue.trim() === "") {
    console.log("Vul je e-mailadres in.");

} else if (messageValue.trim() === "") {
    console.log("Vul een bericht in.");

} else {
    console.log("Alle velden zijn ingevuld!");
}