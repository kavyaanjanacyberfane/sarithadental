// Function to load components dynamically
function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}
function closeNavbar() {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Closes the menu
    }
}

// Function to load pages without refreshing
function loadPage(page) {
    fetch(`pages/${page}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content-container").innerHTML = data;
            closeNavbar(); // Close the navbar after loading the page
        })
        .catch(error => console.error(`Error loading ${page}:`, error));
}

// Load Header, Footer, and Default Page on Initial Load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            closeNavbar();
        });
    });

    loadComponent("components/header.html", "header-container");
    loadComponent("components/footer.html", "footer-container");
    loadPage("home.html"); // Load home page by default
});
// Function to detect when the section is in view
function checkScroll() {
    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return; // Ensure the section exists

    const sectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) { 
        statsSection.classList.add("in-view");
    }
}

// Attach event listener for scrolling
document.addEventListener("scroll", checkScroll);

// Also run on page load in case section is already in view
document.addEventListener("DOMContentLoaded", checkScroll);
// Function to reveal cards when they come into view
function revealCards() {
    const cards = document.querySelectorAll(".doctor-card");
    const windowHeight = window.innerHeight;

    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 50) {
            setTimeout(() => {
                card.classList.add("show"); // Add class with delay
            }, index * 200); // Delay increases for each card (200ms stagger)
        }
    });
}

// Listen for scroll event
document.addEventListener("scroll", revealCards);

// Trigger once in case cards are already in view on page load
document.addEventListener("DOMContentLoaded", revealCards);


