const form = document.querySelector("#signInForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const signUpPassword = document.querySelector("#signUpPassword");
const signUpPasswordError = document.querySelector("#signUpPasswordError");
const confirmPassword = document.querySelector("#confirmPassword");
const confirmPasswordError = document.querySelector("#confirmPasswordError");
const checkedPrivacy = document.querySelector("#privacyChecked"); // must have checked
const privacyError = document.querySelector("#privacyError");


function signUpValidated() {
    var formIsValid = true;

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        formIsValid = false;
    }

    if (signUpPassword.value.length >= 6) {
        signUpPasswordError.style.display = "none";
    } else {
        signUpPasswordError.style.display = "block";
        formIsValid = false;
    }

    if (confirmPassword.value === signUpPassword.value) {
        confirmPasswordError.style.display = "none";
    } else {
        confirmPasswordError.style.display = "block";
        signUpPasswordError.style.display = "none";
        formIsValid = false;
    }

    if (checkedPrivacy.checked) {
        privacyError.style.display = "none";
    } else {
        privacyError.style.display = "block";
        formIsValid = false;
    }

    if (!formIsValid) {
        event.preventDefault();
    }

    function validateEmail(email) {
        const mailForm = /\S+@\S+\.\S+/;
        return mailForm.test(email);
    }
}