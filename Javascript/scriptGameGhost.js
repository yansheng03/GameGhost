let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slider-content');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 5000); /* Auto slide every 5 seconds */

let cart = [];
let totalPrice = 0;

function addToCart(productName, price, quantity) {
    cart.push({ name: productName, price: price, quantity: quantity });
    totalPrice += price * quantity;
    displayCart();
}

function getProductQuantity(quantityId) {
    const quantityInput = document.getElementById(quantityId);
    return parseInt(quantityInput.value) || 1;
}

function displayCart() {
    const cartList = document.getElementById('cartList');
    const totalElement = document.getElementById('totalPrice');
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} - Quantity: ${item.quantity} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);
    });
    totalElement.innerText = totalPrice;
}
function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    totalPrice -= removedItem.price * removedItem.quantity;
    displayCart();
}

function checkout() {
    document.getElementById('stickyCart').style.display = 'none';
    document.getElementById('checkoutForm').style.display = 'block';
}

function placeOrder() {
    cart = [];
    displayCart();

    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('orderConfirmation').style.display = 'block';
}

function calculateTotalPrice() {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}

function goBack() {
    document.getElementById('orderConfirmation').style.display = 'none';
    document.getElementById('stickyCart').style.display = 'block';

    cart = [];
    totalPrice = 0;
    displayCart();
}

/* Function to handle checkout form submission */
document.getElementById('checkoutForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('orderConfirmation').style.display = 'block';
    placeOrder();
});

/* Function to handle scrolling and update the position of the fixed sections */
const stickyCart = document.getElementById('stickyCart');
const checkoutForm = document.getElementById('checkoutForm');
const orderConfirmation = document.getElementById('orderConfirmation');
const productsSection = document.getElementById('products');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const productsOffset = productsSection.offsetTop;

    if (scrollPosition > productsOffset) {
        stickyCart.style.position = 'fixed';
        stickyCart.style.top = '0';
        checkoutForm.classList.add('fixed');
        orderConfirmation.classList.add('fixed');
    } else {
        stickyCart.style.position = 'absolute';
        stickyCart.style.top = `${productsOffset}px`;
        checkoutForm.classList.remove('fixed');
        orderConfirmation.classList.remove('fixed');
    }
});

let currentPage = 1;
const productsPerPage = 5;

function showProducts(page) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productPage = parseInt(product.classList[1].substring(4));
        product.style.display = productPage === page ? 'block' : 'none';
    });
}

function changePage(page) {
    showProducts(page);
    currentPage = page;

    /* Scroll to the top of the products section */
    const productsSection = document.getElementById('products');
    const productsOffset = productsSection.offsetTop;

    window.scrollTo({
        top: productsOffset,
        behavior: 'smooth'
    });
}
showProducts(currentPage);
