document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceContainer = document.getElementById("totalPrice");
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <p>${item.name}</p>
                <p>KES ${item.price}</p>
                <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(itemDiv);
            totalPrice += item.price;
        });
    }

    totalPriceContainer.innerHTML = `Total Price: KES ${totalPrice}`;
});

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove the item from the cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    location.reload(); // Reload the page to show updated cart
}
