document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const terminalOutput = document.querySelector('.terminal-output');
    const terminalInput = document.querySelector('.terminal-input');
    let cart = [];

    // Fetch products and render them
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p class="price">$${product.price}</p>
                    <div class="actions">
                        <button onclick="addToCart(${product.id})">Add to Cart</button>
                        <button onclick="viewDetails(${product.id})">Details</button>
                    </div>
                `;
                productGrid.appendChild(productItem);
            });
        });

    // Terminal command handler
    terminalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim();
            handleCommand(command);
            terminalInput.value = '';
        }
    });

    function handleCommand(command) {
        const args = command.split(' ');

        switch (args[0].toLowerCase()) {
            case 'help':
                terminalOutput.innerHTML += `<p>Available Commands:</p>`;
                terminalOutput.innerHTML += `<p>- list: List all products</p>`;
                terminalOutput.innerHTML += `<p>- details [product_id]: View product details</p>`;
                terminalOutput.innerHTML += `<p>- add [product_id]: Add a product to cart</p>`;
                terminalOutput.innerHTML += `<p>- remove [product_id]: Remove a product from cart</p>`;
                terminalOutput.innerHTML += `<p>- cart: View your cart</p>`;
                terminalOutput.innerHTML += `<p>- buy: Buy all products in the cart</p>`;
                terminalOutput.innerHTML += `<p>- search [query]: Search products by name</p>`;
                terminalOutput.innerHTML += `<p>- sort [price/name]: Sort products by price or name</p>`;
                terminalOutput.innerHTML += `<p>- clear: Clear the screen</p>`;
                break;

            case 'list':
                listProducts();
                break;

            case 'details':
                viewDetails(args[1]);
                break;

            case 'add':
                addToCart(args[1]);
                break;

            case 'remove':
                removeFromCart(args[1]);
                break;

            case 'cart':
                viewCart();
                break;

            case 'buy':
                proceedToCheckout();
                break;

            case 'search':
                searchProducts(args.slice(1).join(' '));
                break;

            case 'sort':
                sortProducts(args[1]);
                break;

            case 'clear':
                terminalOutput.innerHTML = '';
                break;

            default:
                terminalOutput.innerHTML += `<p>Invalid command: ${command}</p>`;
        }
    }

    function listProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            terminalOutput.innerHTML += `<p>Available Products:</p>`;
            products.forEach(product => {
                terminalOutput.innerHTML += `<p>${product.id}: ${product.title} - $${product.price}</p>`;
            });
        })
        .catch(error => {
            terminalOutput.innerHTML += `<p>Error fetching products: ${error.message}</p>`;
        });
}


    function viewDetails(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            terminalOutput.innerHTML += `
                <p>Product Details:</p>
                <p>ID: ${product.id}</p>
                <p>Title: ${product.title}</p>
                <p>Description: ${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
            `;
        })
        .catch(error => {
            terminalOutput.innerHTML += `<p>Error fetching product details: ${error.message}</p>`;
        });
}


    function addToCart(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            cart.push(product);
            terminalOutput.innerHTML += `<p>Added ${product.title} to the cart.</p>`;
        })
        .catch(error => {
            terminalOutput.innerHTML += `<p>Error adding product to cart: ${error.message}</p>`;
        });
}


    function removeFromCart(productId) {
    const productIndex = cart.findIndex(product => product.id == productId);
    if (productIndex !== -1) {
        const removedProduct = cart.splice(productIndex, 1);
        terminalOutput.innerHTML += `<p>Removed ${removedProduct[0].title} from the cart.</p>`;
    } else {
        terminalOutput.innerHTML += `<p>Product with ID ${productId} not found in cart.</p>`;
    }
}


    function viewCart() {
    if (cart.length === 0) {
        terminalOutput.innerHTML += `<p>Your cart is empty.</p>`;
    } else {
        terminalOutput.innerHTML += `<p>Items in your cart:</p>`;
        cart.forEach(product => {
            terminalOutput.innerHTML += `<p>${product.id}: ${product.title} - $${product.price}</p>`;
        });
    }
}


    function proceedToCheckout() {
    if (cart.length === 0) {
        terminalOutput.innerHTML += `<p>Your cart is empty. Add items to your cart before checking out.</p>`;
    } else {
        sessionStorage.setItem('cart', JSON.stringify(cart)); 
        window.location.href = 'checkout.html'; 
    }
}


    function searchProducts(query) {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const searchResults = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
            if (searchResults.length > 0) {
                terminalOutput.innerHTML += `<p>Search Results:</p>`;
                searchResults.forEach(product => {
                    terminalOutput.innerHTML += `<p>${product.id}: ${product.title} - $${product.price}</p>`;
                });
            } else {
                terminalOutput.innerHTML += `<p>No products found for "${query}".</p>`;
            }
        })
        .catch(error => {
            terminalOutput.innerHTML += `<p>Error searching products: ${error.message}</p>`;
        });
}


    function sortProducts(criteria) {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            if (criteria === 'price') {
                products.sort((a, b) => a.price - b.price);
            } else if (criteria === 'name') {
                products.sort((a, b) => a.title.localeCompare(b.title));
            } else {
                terminalOutput.innerHTML += `<p>Invalid sort criteria. Use "price" or "name".</p>`;
                return;
            }

            terminalOutput.innerHTML += `<p>Sorted Products by ${criteria}:</p>`;
            products.forEach(product => {
                terminalOutput.innerHTML += `<p>${product.id}: ${product.title} - $${product.price}</p>`;
            });
        })
        .catch(error => {
            terminalOutput.innerHTML += `<p>Error sorting products: ${error.message}</p>`;
        });
}

});

