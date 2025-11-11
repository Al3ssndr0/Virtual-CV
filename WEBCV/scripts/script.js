// SCROLL ANIMATION
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

// GO UP BUTTON
const btnUp = document.createElement('button');
btnUp.innerHTML = '↑';
btnUp.id = 'btnUp';
document.body.appendChild(btnUp);

btnUp.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btnUp.classList.add('show');
  } else {
    btnUp.classList.remove('show');
  }
});
