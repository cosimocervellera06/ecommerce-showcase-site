document.addEventListener('DOMContentLoaded', () => {
    // References to the elements
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const parallaxSection = document.querySelector('.parallax-section');
    const carouselContainer = document.getElementById('carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    // --- 1. Mobile Menu Interaction ---
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close the mobile menu when a link is clicked (UX)
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });


    // --- 2. Carousel for the Hero Section ---
    const updateCarousel = () => {
        // Calculate the necessary translation in percentage (e.g., 0%, -100%, -200%)
        const offset = currentIndex * -100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    };
    
    // Initialize automatic animation every 4 seconds
    setInterval(nextSlide, 4000);


    // --- 3. Subtle Parallax Effect ---
    const handleParallax = () => {
        if (!parallaxSection) return;

        // Get the current scroll position
        const scrollTop = window.pageYOffset;
        // Get the section's position relative to the top of the viewport
        const rect = parallaxSection.getBoundingClientRect();

        // Calculate how much the section is visible or scrolled.
        // This value is mapped to slightly move the background.
        // The factor 0.1 defines the strength of the effect (lower = more subtle).
        const yOffset = scrollTop + rect.top;
        const movement = yOffset * 0.1;

        // Apply a small vertical movement to the background for the parallax effect
        // Moves 50% (center) + 0.1 * scroll
        parallaxSection.style.backgroundPosition = `center calc(50% + ${movement}px)`;
    };

    // --- 4. Cart Logic (Added to script.js) ---

    const initializeCart = () => {
        // Check if cart exists in localStorage, if not, create it
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]));
        }
    };

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        
        // Check if the item already exists in the cart
        const existingItemIndex = cart.findIndex(item => item.id === product.id);

        if (existingItemIndex > -1) {
            // Item exists, just increment quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // Item is new, add it with quantity 1
            cart.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`); // Simple confirmation
    };

    // Attach listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                id: button.dataset.id,
                name: button.dataset.name,
                price: parseFloat(button.dataset.price)
            };
            addToCart(product);
        });
    });

    // Initialize cart state when the page loads
    initializeCart();

    // Add the scroll listener
    window.addEventListener('scroll', handleParallax);

    // Execute the handler initially to set the correct starting position
    handleParallax();
});