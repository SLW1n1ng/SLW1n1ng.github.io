// Wrap the JavaScript code inside a DOMContentLoaded event listener
  // Select all navbar links
  const navLinks = document.querySelectorAll(".nav-link");

  // Add event listeners to each navbar link
  navLinks.forEach((link) => {
    // Add mouseover event listener
    link.addEventListener("mouseover", () => {
      // Apply size transformation and transition
      link.style.transform = "scale(1.1)";
      link.style.transition = "transform 0.4s ease";
    });

    // Add mouseout event listener
    link.addEventListener("mouseout", () => {
      // Reset size transformation and transition
      link.style.transform = "scale(1)";
      link.style.transition = "transform 0.4s ease";
    });
  });

  

