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
