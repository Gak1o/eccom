document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;

    // You can save the username and password to localStorage or send it to a backend API
    // For simplicity, we'll just use localStorage for this example
    localStorage.setItem("username", regUsername);
    localStorage.setItem("password", regPassword);

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html"; // Redirect to login page after registration
});
