  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('navlinks');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    menuBtn.classList.toggle('active');
  });


const sections = document.querySelectorAll('.section');
sections.forEach(s => s.classList.add('reveal'));

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

sections.forEach(s => io.observe(s));


const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
