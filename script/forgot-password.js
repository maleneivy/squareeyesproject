const form = document.querySelector("#resetForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const successMessage = document.querySelector("#emailSentSuccess");

function validateForm() {
    event.preventDefault();

    var isFormValid = true;

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
        isFormValid = false;
    }

    if (isFormValid) {
        setTimeout(() => {
            email.value = "";
            successMessage.style.display = "block";
        }, 1100);


        setTimeout(() => {
            successMessage.style.display = "none";
        }, 10000);
    }
}

function validateEmail(email) {
    const mailForm = /\S+@\S+\.\S+/;
    return mailForm.test(email);
}