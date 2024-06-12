
// javascript1.js

// Add a class to the active link in the navigation
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('header ul li a');
    var currentPage = window.location.pathname.split('/').pop();

    links.forEach(function(link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

