const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const inputError = document.querySelector(".input-error");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const success = document.querySelector("#successMessage");



function checkLength(value, minimumLength) {
    if (value.trim().length >= minimumLength) {
        return true;
    }
    else {
        return false;
    }
}

function validateForm() {
    event.preventDefault();

    var isFormValid = true;

    if (checkLength(name.value, 1) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
        isFormValid = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
        isFormValid = false;
    }

    if (checkLength(message.value, 1) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
        isFormValid = false;
    }

    if (isFormValid) {
        setTimeout(() => {
            name.value = "";
            email.value = "";
            message.value = "";
            success.style.display = "block";
        }, 1100);


        setTimeout(() => {
            success.style.display = "none";
        }, 10000);

    }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
    const mailForm = /\S+@\S+\.\S+/;
    const emailMatch = mailForm.test(email);
    return emailMatch;
};




