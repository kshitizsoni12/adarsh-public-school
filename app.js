function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}


// carousel with sliding image and text
const slideTexts = [
    {
        heading: "Welcome to Adarsh Public School",
        paragraph: "We are committed to providing quality education with love and care, helping children grow in a safe and joyful environment."
    },
    {
        heading: "Learning with Nature and Play",
        paragraph: "Children explore the world around them with fun activities and outdoor learning."
    },
    {
        heading: "Smart Classes for Smarter Kids",
        paragraph: "Our classrooms are equipped with digital tools to make learning engaging and modern."
    },
    {
        heading: "Our Teachers, Our Strength",
        paragraph: "Trained and loving teachers guide every student with personal care and attention."
    },
    {
        heading: "Creative Minds Begin Here",
        paragraph: "From drawing to drama, we nurture creativity from an early age."
    }
];

const slidesWrapper = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");
const heading = document.getElementById("carousel-heading");
const paragraph = document.getElementById("carousel-paragraph");

let currentIndex = 0;

function updateSlide() {
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    heading.textContent = slideTexts[currentIndex].heading;
    paragraph.textContent = slideTexts[currentIndex].paragraph;
    updateDots();
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
    });
}

function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlide();
        });
        dotsContainer.appendChild(dot);
    }
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});

createDots();
updateSlide();



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
