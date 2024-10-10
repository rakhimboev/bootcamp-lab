document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const contactMethodSelect = document.getElementById("contact-method");
  const emailLabel = document.getElementById("email-label");
  const emailInput = document.getElementById("email-input");
  const phoneLabel = document.getElementById("phone-label");
  const phoneInput = document.getElementById("phone-input");

  // Initially hide email and phone fields
  emailLabel.style.display = "none";
  emailInput.style.display = "none";
  phoneLabel.style.display = "none";
  phoneInput.style.display = "none";

  // Add event listener for dropdown selection change
  contactMethodSelect.addEventListener("change", function () {
    // Hide both email and phone fields initially
    emailLabel.style.display = "none";
    emailInput.style.display = "none";
    phoneLabel.style.display = "none";
    phoneInput.style.display = "none";

    // Show the relevant field based on the selected value
    if (contactMethodSelect.value === "email") {
      emailLabel.style.display = "block";
      emailInput.style.display = "block";
    } else if (contactMethodSelect.value === "phone") {
      phoneLabel.style.display = "block";
      phoneInput.style.display = "block";
    }
  });
});
