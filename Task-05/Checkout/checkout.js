const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
const cart2 = sessionStorage.getItem('cart') || [];
const cartContainer = document.querySelector('.cart');
console.log('cartw/oparse:', cart2);
console.log('Cart ', cart);
console.log('Cart Container:', cartContainer);

if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
} else {
    let total = 0;
    cart.forEach(item => {
        console.log('Adding item to cart display:', item);

        cartContainer.innerHTML += `<p>${item.title}: $${item.price.toFixed(2)}</p>`;
        total += item.price;
    });

    console.log('Total Price:', total);

    cartContainer.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
    cartContainer.innerHTML += '<button>Proceed to Payment</button>';
}

