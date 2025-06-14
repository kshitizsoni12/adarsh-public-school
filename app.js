function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}


// carousel
function sliderinit() {

    const slidesWrapper = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const dotsContainer = document.querySelector('.dots');

    const totalRealSlides = slides.length - 2; // subtract 2 clones
    let currentIndex = 1; // Start at first real slide
    let interval;

    // Set slide width based on total slides
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    // ✅ Create Dots
    for (let i = 0; i < totalRealSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i + 1; // offset due to clone
            moveToSlide();
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }

    // ✅ Move to current slide
    function moveToSlide() {
        slidesWrapper.style.transition = 'transform 0.5s ease-in-out';
        slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    // ✅ Update Dots
    function updateDots() {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        if (currentIndex > 0 && currentIndex <= totalRealSlides)
            dotsContainer.children[currentIndex - 1].classList.add('active');
    }

    // ✅ Handle next/prev buttons
    nextBtn.addEventListener('click', () => {
        if (currentIndex >= slides.length - 1) return;
        currentIndex++;
        moveToSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex <= 0) return;
        currentIndex--;
        moveToSlide();
        resetAutoSlide();
    });

    // ✅ Looping logic after transition ends
    slidesWrapper.addEventListener('transitionend', () => {
        if (slides[currentIndex].innerHTML === slides[0].innerHTML) {
            slidesWrapper.style.transition = 'none';
            currentIndex = totalRealSlides;
            slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        } else if (slides[currentIndex].innerHTML === slides[slides.length - 1].innerHTML) {
            slidesWrapper.style.transition = 'none';
            currentIndex = 1;
            slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    });

    // ✅ Auto slide
    function startAutoSlide() {
        interval = setInterval(() => {
            currentIndex++;
            moveToSlide();
        }, 4000);
    }

    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    // ✅ Initialize
    startAutoSlide();

}

sliderinit();


// code to change navbarcolor acc. to background
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const vh100 = window.innerHeight;
    if (window.scrollY > vh100) {
        header.classList.add("light-header");
        header.classList.remove("dark-header");
    } else {
        header.classList.add("dark-header");
        header.classList.remove("light-header");
    }
});
