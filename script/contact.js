const form = document.querySelector("#contactForm"); //pick the form by its id
const firstName = document.querySelector("#firstName");
const inputError = document.querySelector(".input-error");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const success = document.querySelector("#successMessage");
const submitButton = document.querySelector("#clearSend");



function checkLength(value, minimumLength) { //a function I can reuse rather then repeating the code I need to check the length. 
    if (value.trim().length >= minimumLength) {
        return true;
    }
    else {
        return false;
    }
}

function validateForm() {
    event.preventDefault(); //preventing the default behaviour of the form, and we can access the input values on the form. (prevents the form to autosubmitting )

    var isFormValid = true;

    if (checkLength(firstName.value, 1) === true) { //checking length of firstname, (don't need the === but it's better for reading the code.) 
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
        isFormValid = false;
    }

    if (checkLength(lastName.value, 1) === true) { //checking length of lastname
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
        isFormValid = false;
    }

    if (validateEmail(email.value) === true) { // checking valid email.
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
        // Do something.
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        message.value = "";
        success.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);



function validateEmail(email) {
    const mailForm = /\S+@\S+\.\S+/; // checking structure of valid email REGEX
    const emailMatch = mailForm.test(email);
    return emailMatch;
};




