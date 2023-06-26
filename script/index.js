// Smooth scroll to top functionality
var scrollToTopBtn = document.querySelector(".scroll-to-top");
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scroll to section functionality
var navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var targetId = this.getAttribute("href");
    var targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

// Show scroll-to-top button when scrolling down
window.addEventListener("scroll", function () {
  var scrollPosition = window.pageYOffset;
  if (scrollPosition > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Intersection Observer for section animations
var sectionObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.3 }
);

var sections = document.querySelectorAll("section");
sections.forEach(function (section) {
  sectionObserver.observe(section);
});

// Dropdown functionality for navbar
var projectsDropdownToggle = document.getElementById("projectsDropdown");
var projectsDropdownMenu = document.getElementById("projectsDropdownMenu");

// Show projects dropdown on mouseenter
projectsDropdownToggle.addEventListener("mouseenter", function (e) {
  e.preventDefault();
  projectsDropdownMenu.classList.add("show");
});

// Hide projects dropdown on mouseleave
projectsDropdownToggle.addEventListener("mouseleave", function () {
  projectsDropdownMenu.classList.remove("show");
});

// Close dropdown when clicking outside
window.addEventListener("click", function (event) {
  if (
    !projectsDropdownToggle.contains(event.target) &&
    !projectsDropdownMenu.contains(event.target)
  ) {
    projectsDropdownMenu.classList.remove("show");
  }
});

// Opacity and size transformation on hover for social media icons
var socialMediaIcons = document.querySelectorAll(".social-media-icon");
socialMediaIcons.forEach(function (icon) {
  icon.addEventListener("mouseenter", function () {
    icon.style.opacity = "0.8";
    icon.style.transform = "scale(1.2)";
    icon.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  });

  icon.addEventListener("mouseleave", function () {
    icon.style.opacity = "1";
    icon.style.transform = "scale(1)";
    icon.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  });
});
