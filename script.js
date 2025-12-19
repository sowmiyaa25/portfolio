const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

/* Scroll animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => observer.observe(section));

