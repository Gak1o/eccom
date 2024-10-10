document.getElementById("checkoutButton").addEventListener("click", function () {
    const phoneNumber = document.getElementById("phoneNumber").value;

    // Check if the phone number is valid
    if (phoneNumber) {
        // Display a popup message
        alert(`Your order is being processed to ${phoneNumber}`);
        
        // Redirect to the thanks.html page after 2 seconds
        setTimeout(() => {
            window.location.href = "thanks.html";
        }, 2000); // Adjust the timing as needed
    } else {
        alert("Please enter a valid phone number.");
    }
});
