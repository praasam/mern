document.addEventListener('DOMContentLoaded', () => {
    // Theme toggling
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        toggleButton.setAttribute('aria-pressed', currentTheme === 'dark');
    }

    toggleButton.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        toggleButton.setAttribute('aria-pressed', theme === 'dark');
    });

    // Carousel functionality
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    updateCarousel();

    // Navbar toggle
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('open');
        menuIcon.innerHTML = menuIcon.classList.contains('open') ? '<i class="ri-arrow-down-double-line"></i>' : '<i class="ri-menu-line"></i>';
    });
});
