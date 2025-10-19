document.addEventListener('DOMContentLoaded', () => {
    // Riferimenti agli elementi
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const parallaxSection = document.querySelector('.parallax-section');
    const carouselContainer = document.getElementById('carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    // --- 1. Interazione Mobile Menu ---
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Chiudi il menu mobile quando si clicca su un link (UX)
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });


    // --- 2. Carousel per l'Hero Section ---
    const updateCarousel = () => {
        // Calcola la traslazione necessaria in percentuale (es. 0%, -100%, -200%)
        const offset = currentIndex * -100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    };
    
    // Inizializza l'animazione automatica ogni 4 secondi
    setInterval(nextSlide, 4000);


    // --- 3. Effetto Parallax Sottile ---
    const handleParallax = () => {
        if (!parallaxSection) return;

        // Ottiene la posizione corrente di scroll
        const scrollTop = window.pageYOffset;
        // Ottiene la posizione della sezione rispetto alla parte superiore della viewport
        const rect = parallaxSection.getBoundingClientRect();

        // Calcola quanto la sezione è visibile o scrollata.
        // Questo valore viene mappato per muovere lo sfondo leggermente.
        // Il fattore 0.1 definisce la forza dell'effetto (più basso = più sottile).
        const yOffset = scrollTop + rect.top;
        const movement = yOffset * 0.1;

        // Applica un piccolo movimento verticale allo sfondo per l'effetto parallax
        // Si muove 50% (centro) + 0.1 * scroll
        parallaxSection.style.backgroundPosition = `center calc(50% + ${movement}px)`;
    };

    // Aggiunge il listener di scroll
    window.addEventListener('scroll', handleParallax);

    // Esegue l'handler all'inizio per impostare la posizione iniziale corretta
    handleParallax();
});