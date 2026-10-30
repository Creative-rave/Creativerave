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