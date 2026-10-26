let subButton = document.getElementById("subButton");

// Validate form completion when submit button is clicked
subButton.addEventListener("click", validateFName);
subButton.addEventListener("click", validateLName);
subButton.addEventListener("click", validateEmail);
subButton.addEventListener("click", validateMessage);

// Check if first name is given
function validateFName() {
    let firstName = document.getElementById("firstName");
    if (firstName.validity.valueMissing) {
        firstName.setCustomValidity("Please enter your first name");
    } else {
        firstName.setCustomValidity("");
    }
}

// Check if the last name is given
function validateLName() {
    let lastName = document.getElementById("lastName");
    if (lastName.validity.valueMissing) {
        lastName.setCustomValidity("Please enter your last name");
    } else {
        lastName.setCustomValidity("");
    }
}

// Validate email is correct format
function validateEmail() {
    let email = document.getElementById("email");
    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter your email");
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email.setCustomValidity("Please enter a valid email address");
    } else {
        email.setCustomValidity("");
    }
}

// Validate that there is a message given
function validateMessage() {
    let message = document.getElementById("message");
    if (message.validity.valueMissing){
        message.setCustomValidity("Please enter your message!");
    } else {
        message.setCustomValidity("");
    }
}