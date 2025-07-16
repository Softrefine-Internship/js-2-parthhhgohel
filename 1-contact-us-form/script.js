const switchBox = document.getElementById('toggleSwitch');
const checkbox = document.getElementById('switch');

switchBox.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
    switchBox.classList.toggle('active', checkbox.checked);
    if (switchBox.classList.contains('active')) {
        switchBox.style.backgroundColor = 'rgb(62, 79, 231)';
    }
    else {
        switchBox.style.backgroundColor = 'rgb(223, 223, 223)';
    }
});


// Error message function with parameter of input
function showError(className, message) {
    document.querySelector(`.${className}`).innerHTML = message;
}


// *************** form validation **********
document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();

    // Get input elements
    const firstNameInput = document.getElementById("first");
    const lastNameInput = document.getElementById("last");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    // Get values
    const firstNameVal = firstNameInput?.value.trim();
    const lastNameVal = lastNameInput?.value.trim();
    const emailVal = emailInput?.value.trim();
    const phoneVal = phoneInput?.value.trim();
    const messageVal = messageInput?.value.trim();

    // Clear previous errors
    document.querySelectorAll("span").forEach(span => {
        span.textContent = "";
        span.classList.remove("active");
    });

    // Validations
    if (firstNameVal === "" || lastNameVal === "" || emailVal === "" || messageVal === "" || phoneVal === "" ) {
        if (firstNameVal === "") {
            showError("firstName-error", "Please enter your first name");
        }
        if (lastNameVal === "") {
            showError("lastName-error", "Please enter your last name");
        }
        if (emailVal === "") {
            showError("email-error", "Please enter your email");
        }
        if (messageVal === "") {
            showError("message-error", "Please enter your message");
        }
        if (phoneVal === "") {
            showError("phone-error", "Please enter your phone number");
        }
    } else if (!emailVal.includes("@")) {
        showError("email-error", "Please enter a valid email");
    } else if (!phoneVal.startsWith("+91")) {
        showError("phone-error", "Phone number should start with +91");
    } else {
        alert("Form submitted successfully!");
        // Here you can proceed with form submission logic
    }
});