let cart = [];
let cartTotal = 0;

function searchItems() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('#itemList .item');
    
    items.forEach(item => {
        const itemName = item.textContent.toLowerCase();
        if (itemName.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function filterItems() {
    const filterValue = document.getElementById('filterSelect').value;
    const items = document.querySelectorAll('#itemList .item');
    
    items.forEach(item => {
        const itemCategory = item.classList[1];
        if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function addToCart(itemName, itemPrice) {
    // Add item to the cart array
    cart.push({ name: itemName, price: itemPrice });

    // Update the cart total price
    cartTotal += itemPrice;

    // Update the cart UI
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear the cart before adding updated items

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    // Update the total price in the UI
    document.getElementById('cartTotal').textContent = cartTotal;
}

function showPaymentForm() {
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.style.display = 'block';
}

function processPayment(event) {
    event.preventDefault();

    // Hide the payment form
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.style.display = 'none';

    // Display the success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Clear the cart
    cart = [];
    cartTotal = 0;
    updateCart();
}
