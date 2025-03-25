// Navbar Toggle for Mobile
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Toggle icon between bars and close
    if (navLinks.classList.contains("show")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
    } else {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
    }
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    document.body.dataset.theme = currentTheme;

    // Update icon based on theme
    if (currentTheme === "dark") {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    // Send form data to FormSubmit API
    fetch(form.action, {
        method: form.method,
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                // Redirect to thank-you.html after success
                window.location.href = "thank-you.html";
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
});
