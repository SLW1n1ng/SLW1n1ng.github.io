// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
// Dropdown functionality for navbar
var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    var dropdownMenu = this.nextElementSibling;
    dropdownMenu.classList.toggle('show');
  });
});

// Close dropdowns when clicking outside
window.addEventListener('click', function(event) {
  dropdownToggles.forEach(function(toggle) {
    var dropdownMenu = toggle.nextElementSibling;
    if (!toggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});
