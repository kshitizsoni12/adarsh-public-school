function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}


// carousel
function sliderinit() {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    let currentIndex = 0;
    let slideInterval;

    function showSlide(index) {
        const slidesWrapper = document.querySelector('.slides');
        slidesWrapper.style.transform = `translateX(-${index * 100}%)`;

        // Set active dot
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        dotsContainer.children[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Generate dots
    slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = idx;
            showSlide(currentIndex);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Auto slide
    function startSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    function resetInterval() {
        clearInterval(slideInterval);
        startSlide();
    }

    showSlide(currentIndex);
    startSlide();
}

sliderinit();