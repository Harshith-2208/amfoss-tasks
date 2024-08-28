const terminalOutput = document.querySelector('.terminal-output');
const terminalInput = document.querySelector('input[type="text"]');
let cart = [];
let products = [];

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        products = data;
    });


function handleInput(command) {

    const [action, ...args] = command.trim().split(' ');


    switch (action.toLowerCase()) {

        case 'list':
            listProducts();
            break;
        case 'details':
            viewDetails(args[0]);
            break;
        case 'add':
            addToCart(args[0]);
            break;
        case 'remove':
            removeFromCart(args[0]);
            break;
        case 'cart':
            viewCart();
            break;
        case 'buy':
            proceedToBuy();
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'search':
            searchProduct(args.join(' '));
            break;
        case 'sort':
            sortProducts(args[0]);
            break;
            
            

        default:
            terminalOutput.textContent += `Invalid command: ${command}\n`;
            break;
    }

    terminalInput.value = '';
}

function listProducts() {
    terminalOutput.innerHTML += 'Products:\n';
    products.forEach(product => {
        terminalOutput.innerHTML += `${product.id}: ${product.title}\n`;
    });
}

function viewDetails(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        terminalOutput.innerHTML += `Details of ${product.title}:\n${JSON.stringify(product, null, 2)}\n`;
    } else {
        terminalOutput.innerHTML += `Product with ID ${productId} not found.\n`;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        cart.push(product);
        terminalOutput.innerHTML += `${product.title} added to cart.\n`;
    } else {
        terminalOutput.innerHTML += `Product with ID ${productId} not found.\n`;
    }
}

function removeFromCart(productId) {
    cart = cart.filter(p => p.id != productId);
    terminalOutput.innerHTML += `Product with ID ${productId} removed from cart.\n`;
}

function viewCart() {
    if (cart.length === 0) {
        terminalOutput.innerHTML += `Cart is empty.\n`;
    } else {
        terminalOutput.innerHTML += `Cart:\n`;
        cart.forEach(item => {
            terminalOutput.innerHTML += `${item.id}: ${item.title}\n`;
        });
    }
}

function proceedToBuy() {
    if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart)); 
        window.location.href = 'checkout.html'; 
    } else {
        terminalOutput.innerHTML += `Cart is empty. Add items before proceeding to checkout.\n`;
    }
    console.log('stored in cart:', cart);
}



function clearTerminal() {
    terminalOutput.innerHTML = '';
}

function searchProduct(productName) {
    const results = products.filter(p => p.title.toLowerCase().includes(productName.toLowerCase()));
    if (results.length > 0) {
        terminalOutput.innerHTML += `Search results for "${productName}":\n`;
        results.forEach(product => {
            terminalOutput.innerHTML += `${product.id}: ${product.title}\n`;
        });
    } else {
        terminalOutput.innerHTML += `No products found for "${productName}".\n`;
    }
}

function sortProducts(criteria) {
    if (criteria === 'price') {
        products.sort((a, b) => a.price - b.price);
    } else if (criteria === 'name') {
        products.sort((a, b) => a.title.localeCompare(b.title));
    }
    terminalOutput.innerHTML += `Products sorted by ${criteria}.\n`;
}
    
    terminalInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleInput(terminalInput.value);
    }
});





