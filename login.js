document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve registered username and password from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Check if the entered credentials match the stored credentials
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", true); // Set login status
        window.location.href = "cart.html"; // Redirect to cart page after login
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
