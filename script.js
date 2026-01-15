const toggle = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggle.textContent = '☀️';
} else {
  toggle.textContent = '🌙';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
