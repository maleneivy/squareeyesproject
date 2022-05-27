const form = document.querySelector("#logInForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password1 = document.querySelector("#password1");
const password1Error = document.querySelector("#password1Error");


function logInValidated() {
    var isFormValid = true;

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
        isFormValid = false;
    }

    if (password1.value.length < 6) {
        password1Error.style.display = "block";
        isFormValid = false;
    }
    else {
        password1Error.style.display = "none";
    }

    if (!isFormValid) {
        event.preventDefault();
    }



    function validateEmail(email) {
        const mailForm = /\S+@\S+\.\S+/;
        const emailMatch = mailForm.test(email);
        return emailMatch;
    };

}