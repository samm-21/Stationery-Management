document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "Want to buy a Pen ?",
        "Need Project papers ?",
        "Stationery for drawing ?"
    ];

    const quoteElement = document.getElementById('quote');
    const startButton = document.getElementById('startButton');

    let currentQuoteIndex = 0;

    function changeQuote() {
        quoteElement.textContent = quotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    }

    startButton.addEventListener('click', function() {
        window.location.href = "login.html";
    });

    setInterval(changeQuote, 3000); // Change quote every 3 seconds
});

function addToCart(item, price) {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    const li = document.createElement('li');
    li.innerText = `${item} - $${price.toFixed(2)}`;
    cartItems.appendChild(li);

    const total = parseFloat(totalElement.innerText.substring(1)) + price;
    totalElement.innerText = `$${total.toFixed(2)}`;
}

function showCart() {
    const cart = document.getElementById('cart');
    cart.style.display = 'block';
}

function checkout() {
    alert('Thank you for your purchase!');
}


function addToCart(item, price) {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    const li = document.createElement('li');
    li.innerText = `${item} -₹${price.toFixed(2)}`;
    cartItems.appendChild(li);

    const total = parseFloat(totalElement.innerText.substring(1)) + price;
    totalElement.innerText = `₹${total.toFixed(2)}`;
}

function viewCart() {
    const cart = document.getElementById('cart');
    cart.style.display = 'block';
}

function checkout() {
    alert('Thank you for your purchase!');
}
