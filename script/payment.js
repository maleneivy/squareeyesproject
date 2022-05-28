const form = document.querySelector("#paymentForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

function checkLength(value, minimumLength) {
    if (value.trim().length >= minimumLength) {
        return true;
    }
    else {
        return false;
    }
}

function validateForm() {

    isFormValid = true;

    if (checkLength(fullName.value, 1)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        isFormValid = false;
    }

    if (checkLength(cardNumber.value, 16) === true) {
        cardNumberError.style.display = "none";
    }
    else {
        cardNumberError.style.display = "block";
        isFormValid = false;
    }


    if (checkLength(cvc.value, 3)) {
        cvcError.style.display = "none";
    } else {
        cvcError.style.display = "block";
        isFormValid = false;
    }

    if (!isFormValid) {
        event.preventDefault();
    }
}

