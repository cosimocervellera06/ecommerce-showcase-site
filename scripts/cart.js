document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total');
    const emptyMessage = document.getElementById('empty-cart-message');
    
    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let cartTotal = 0;

    const renderCart = () => {
        container.innerHTML = ''; // Clear existing content
        cartTotal = 0;

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
                <div class="flex items-center p-4 sm:p-6 hover:bg-gray-50 transition duration-150">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-lg font-bold dark-text">${item.name}</h2>
                        <p class="text-sm text-gray-500">Price: € ${item.price.toFixed(2)}</p>
                    </div>

                    <div class="flex items-center space-x-2 mx-4">
                        <span class="text-lg font-semibold dark-text">Qty: ${item.quantity}</span>
                    </div>

                    <div class="text-right w-24">
                        <span class="text-xl font-bold terracotta-text">€ ${itemTotal.toFixed(2)}</span>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', cartItemHTML);
        });

        // Update the main total display
        totalElement.textContent = `€ ${cartTotal.toFixed(2)}`;
    };

    renderCart();
});