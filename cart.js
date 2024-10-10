document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceContainer = document.getElementById("totalPrice");
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `<p>${item.name}</p><p>KES ${item.price}</p>`;
            cartItemsContainer.appendChild(itemDiv);
            totalPrice += item.price;
        });
    }

    totalPriceContainer.innerHTML = `Total Price: KES ${totalPrice}`;
});
