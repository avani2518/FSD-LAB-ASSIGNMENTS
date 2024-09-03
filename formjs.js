document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let errors = [];

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Validate fields are not empty
    if (username === "") errors.push("Username cannot be empty.");
    if (email === "") errors.push("Email cannot be empty.");
    if (phone === "") errors.push("Phone number cannot be empty.");
    if (password === "") errors.push("Password cannot be empty.");
    if (confirmPassword === "") errors.push("Confirm Password cannot be empty.");

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
        errors.push("Phone number must be 10 digits.");
    }

    // Validate password
    if (password.length < 7) {
        errors.push("Password must be at least 7 characters long.");
    } else if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one capital letter.");
    } else if (!/\d/.test(password)) {
        errors.push("Password must contain at least one digit.");
    } else if (!/[&$#@]/.test(password)) {
        errors.push("Password must contain at least one special character (&, $, #, @).");
    }

    // Validate passwords match
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    // Validate email
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email)) {
        errors.push("Invalid email format.");
    }

    // Display errors
    const errorMessages = document.getElementById('errorMessages');
    if (errors.length > 0) {
        errorMessages.innerHTML = errors.join('<br>');
    } else {
        errorMessages.innerHTML = "Form submitted successfully!";
        
        // Show Clear button
        const clearButton = document.getElementById('clearButton');
        clearButton.style.display = 'inline-block'; // Ensure button is displayed
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    // Clear form fields
    document.getElementById('registrationForm').reset();

    // Hide error messages
    document.getElementById('errorMessages').innerHTML = '';

    // Hide Clear button
    this.style.display = 'none';
});
