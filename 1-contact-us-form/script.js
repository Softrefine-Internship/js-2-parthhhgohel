const switchBox = document.getElementById("toggleSwitch");
const checkbox = document.getElementById("switch");

switchBox.addEventListener("click", () => {
  checkbox.checked = !checkbox.checked;
  switchBox.classList.toggle("active", checkbox.checked);
  if (switchBox.classList.contains("active")) {
    switchBox.style.backgroundColor = "rgb(62, 79, 231)";
  } else {
    switchBox.style.backgroundColor = "rgb(223, 223, 223)";
  }
});

// Error message function with parameter of input
function showError(id, message) {
  const errorSpan = document.getElementById(id);
  if (errorSpan) {
    errorSpan.style.fontSize = "11px";
    errorSpan.style.fontWeight = "400";
    errorSpan.style.color = "red";
    errorSpan.textContent = message;
    errorSpan.classList.add("active");
  }
}

function clearError(id) {
  const errorSpan = document.getElementById(id);
  if (errorSpan) {
    errorSpan.textContent = "";
    errorSpan.classList.remove("active");
  }
}

function validateField(id, value) {
  let errorMessage = "";

  switch (id) {
    case "first":
      if (!value) errorMessage = "Please enter your first name";
      break;
    case "last":
      if (!value) errorMessage = "Please enter your last name";
      break;
    case "company":
      if (!value) errorMessage = "Please enter your company name";
      break;
    case "email":
      if (!value) errorMessage = "Please enter your email";
      else if (!value.includes("@")) errorMessage = "Please enter a valid email";
      break;
    case "phone":
      if (!value) errorMessage = "Please enter your phone number";
      else if (!/^[6-9]\d{9}$/.test(value)) errorMessage = "Phone number should start with +91";
      else if (value.length !== 10) errorMessage = "Phone number should be 13 digits";
      break;
    case "message":
      if (!value) errorMessage = "Please enter your message";
      break;
  }

  // Match to updated span IDs
  const spanIdMap = {
    first: "firstName-error",
    last: "lastName-error",
    company: "company-error",
    email: "email-error",
    phone: "phone-error",
    message: "message-error"
  };

  if (errorMessage) {
    showError(spanIdMap[id], errorMessage);
    return false;
  } else {
    clearError(spanIdMap[id]);
    return true;
  }
}

// Blur event on all fields
const field = ["first", "last", "company", "email", "phone", "message"];
field.forEach((id) => {
  const input = document.getElementById(id);
  if (input) {
    input.addEventListener("blur", function () {
      validateField(id, input.value.trim());
    });
  }
});

// Validate checkbox (privacy policy)
function validateCheckbox() {
  const checkbox = document.getElementById("switch");
  if (!checkbox.checked) {
    showError("checkbox-error", "Please agree to the privacy policy");
    return false;
  } else {
    clearError("checkbox-error");
    return true;
  }
}

// Form submit handler
document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();

  const fields = ["first", "last", "company", "email", "phone", "message"];
  let allValid = true;

  fields.forEach((fieldId) => {
    const input = document.getElementById(fieldId);
    const isValid = validateField(fieldId, input?.value.trim());
    if (!isValid) allValid = false;
  });

  const checkboxValid = validateCheckbox();
  if (!checkboxValid) allValid = false;

  if (allValid) {
    alert("Form submitted successfully!");
    // Proceed with form logic here
  }
});
