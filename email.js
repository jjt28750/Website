// Get email submit button information
subButton = document.getElementById("subEmail");

// Add event listener to submit button
subButton.addEventListener("click", validateEmail);

// Validate email is correct format
function validateEmail() {
    let email = document.getElementById("mailEmail").value;
    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter your email");
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        email.setCustomValidity("Please enter a valid email address");
    } else {
        createThanks();
    }
}

// Function to create thank you message
function createThanks() {
    
    // Get email handle from user
    let email = document.getElementById("mailEmail").value;

    // Get information from email handel
    let atIndex = email.indexOf("@");
    let name = email.slice(0, atIndex);
    let compEmail = email.slice(atIndex +1);

    // Add thank you message for signing up
    let thankBox = document.createElement("div");
    let thankMessage = document.createElement("p");
    thankMessage.className = "desc shadows-into-light-two-regular";
    thankMessage.innerHTML = "Thank you, " + name + ", for subscribing!  Please check your " + compEmail + " inbox for confirmation.";
    thankBox.appendChild(thankMessage);

    let signUpsection = document.getElementById("subSignUp");
    signUpsection.appendChild(thankBox);
}

