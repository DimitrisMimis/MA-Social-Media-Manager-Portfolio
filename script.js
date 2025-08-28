/* Animate Section Titles */
const sectionTitles = document.querySelectorAll(".section-title");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
});

sectionTitles.forEach(title => observer.observe(title));

/* Burger Menu Toggle */
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');

  navItems.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  burger.classList.toggle('toggle');
});

/* --- Auto-close Menu on Link Click --- */
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
    navItems.forEach(link => link.style.animation = '');
    burger.classList.remove('toggle');
  });
});