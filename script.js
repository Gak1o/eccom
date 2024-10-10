let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCartCount();
    alert(`${productName} has been added to your cart.`);
}

function updateCartCount() {
    const cartCount = document.getElementById("cartCount");
    cartCount.innerText = cart.length;
}
