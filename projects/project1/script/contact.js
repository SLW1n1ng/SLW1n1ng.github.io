// Navbar buttons
var navbarButtons = document.querySelectorAll('.navbar li a');

navbarButtons.forEach(function(button) {
  // Add visibility and accessibility attributes
  button.setAttribute('tabindex', '0');
  button.setAttribute('aria-label', button.textContent);
  
  // Add opacity and hover effect
  button.style.opacity = '0.8';

  button.addEventListener('mouseenter', function() {
    this.style.opacity = '1';
  });

  button.addEventListener('mouseleave', function() {
    this.style.opacity = '0.8';
  });
});

// Body buttons
var bodyButtons = document.querySelectorAll('.body-button');

bodyButtons.forEach(function(button) {
  // Add visibility and accessibility attributes
  button.setAttribute('tabindex', '0');
  button.setAttribute('aria-label', button.textContent);
  
  // Add opacity and hover effect
  button.style.opacity = '0.8';

  button.addEventListener('mouseenter', function() {
    this.style.opacity = '1';
  });

  button.addEventListener('mouseleave', function() {
    this.style.opacity = '0.8';
  });
});

// Footer buttons
var footerButtons = document.querySelectorAll('.social-media-icons a');

footerButtons.forEach(function(button) {
  // Add visibility and accessibility attributes
  button.setAttribute('tabindex', '0');
  button.setAttribute('aria-label', button.textContent);
  
  // Add opacity and hover effect
  button.style.opacity = '0.8';

  button.addEventListener('mouseenter', function() {
    this.style.opacity = '1';
  });

  button.addEventListener('mouseleave', function() {
    this.style.opacity = '0.8';
  });
});
