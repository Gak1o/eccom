// Sample product data
const products = [
    { id: 1, name: 'Safari Boots', price: 3500, image: '/api/placeholder/300/300' },
    { id: 2, name: 'Urban Sneakers', price: 2800, image: '/api/placeholder/300/300' },
    { id: 3, name: 'Classic Loafers', price: 4200, image: '/api/placeholder/300/300' },
    { id: 4, name: 'Running Shoes', price: 3200, image: '/api/placeholder/300/300' },
    { id: 5, name: 'Casual Slip-ons', price: 2500, image: '/api/placeholder/300/300' },
    { id: 6, name: 'Hiking Boots', price: 5000, image: '/api/placeholder/300/300' },
    { id: 7, name: 'Canvas Shoes', price: 2000, image: '/api/placeholder/300/300' },
    { id: 8, name: 'Formal Oxfords', price: 4500, image: '/api/placeholder/300/300' },
    { id: 9, name: 'Flip Flops', price: 1200, image: '/api/placeholder/300/300' },
    { id: 10, name: 'Leather Sandals', price: 2700, image: '/api/placeholder/300/300' }
];

// Cart stored in localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Simulate user login status (in a real scenario, this would come from a backend)
const isLoggedIn = true; // Change to false if not logged in

document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    updateCartDisplay();
    
    document.getElementById('checkoutBtn').addEventListener('click', function () {
        if (isLoggedIn) {
            window.location.href = "mpesa_payment.html";  // Redirect to payment page
        } else {
            alert('Please login to proceed with checkout.');
        }
    });
});

// Load cart from localStorage
function loadCart() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

// Update cart display
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    let subtotal = 0;
    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        subtotal += product.price * item.quantity;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-details">
                <h4>${product.name}</h4>
                <p>KES ${product.price}</p>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });

    // Calculate VAT and total
    const vat = subtotal * 0.16;
    const total = subtotal + vat;

    // Update summary
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('vat').textContent = vat.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Increase item quantity
function increaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

// Decrease item quantity
function decreaseQuantity(id) {
    const item = cart.find(item => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    } else {
        removeItemFromCart(id);
    }
}

// Remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}
