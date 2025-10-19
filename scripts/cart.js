document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total');
    const emptyMessage = document.getElementById('empty-cart-message');
    
    // Function to update the cart in localStorage
    const updateLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    // Main function for removal
    const removeFromCart = (itemId) => {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        
        // Filter the cart by removing the item with the specified ID
        const updatedCart = cart.filter(item => item.id !== itemId);

        updateLocalStorage(updatedCart); // Save the new cart
        renderCart(); // Re-render the list
    };

    // Function for rendering the cart
    const renderCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        container.innerHTML = ''; // Clear existing content
        let cartTotal = 0;

        if (cart.length === 0) {
            emptyMessage.classList.remove('hidden');
            totalElement.textContent = '€ 0.00';
            return;
        }

        emptyMessage.classList.add('hidden');

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            cartTotal += itemTotal;

            const cartItemHTML = `
                <div class="flex items-center p-4 sm:p-6 hover:bg-gray-50 transition duration-150" data-item-id="${item.id}">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-lg font-bold dark-text">${item.name}</h2>
                        <p class="text-sm text-gray-500">Price: € ${item.price.toFixed(2)}</p>
                    </div>

                    <div class="flex items-center space-x-2 mx-4">
                        <span class="text-lg font-semibold dark-text">Qty: ${item.quantity}</span>
                    </div>

                    <div class="text-right w-24 mr-4">
                        <span class="text-xl font-bold terracotta-text">€ ${itemTotal.toFixed(2)}</span>
                    </div>
                    
                    <button class="remove-button" data-id="${item.id}" aria-label="Remove ${item.name}">
                        Remove
                    </button>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', cartItemHTML);
        });
        
        // Attach event handlers to all "Remove" buttons
        document.querySelectorAll('.remove-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.currentTarget.dataset.id;
                removeFromCart(itemId);
            });
        });

        // Update the main total
        totalElement.textContent = `€ ${cartTotal.toFixed(2)}`;
    };

    // Run rendering on startup
    renderCart();
});