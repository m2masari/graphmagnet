document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav_links a");

    // Check if there's a stored active link ID
    var storedActiveLink = localStorage.getItem('activeLink');

    // If there is, set the "active" class to the stored link
    if (storedActiveLink) {
        document.getElementById(storedActiveLink).classList.add('active');
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Remove 'active' class from all links
            navLinks.forEach(function (navLink) {
                navLink.classList.remove("active");
            });

            // Add 'active' class to the clicked link
            link.classList.add("active");

            // Store the clicked link ID in local storage
            localStorage.setItem('activeLink', link.id);
        });
    });
});