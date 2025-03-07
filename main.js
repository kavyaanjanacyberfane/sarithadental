// Function to load components dynamically
function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}

// Function to load pages without refreshing
function loadPage(page) {
    fetch(`pages/${page}`)
        .then(response => response.text())
        .then(data => document.getElementById("content-container").innerHTML = data)
        .catch(error => console.error(`Error loading ${page}:`, error));
}

// Load Header, Footer, and Default Page on Initial Load
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("components/header.html", "header-container");
    loadComponent("components/footer.html", "footer-container");
    loadPage("home.html"); // Load home page by default
});
