// ===== Theme Toggle (Light / Dark Mode) =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se há tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// Alterna entre os temas
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', '');
    localStorage.setItem('theme', '');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// ===== Scroll suave nos links de navegação =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Header com sombra no scroll =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ===== Animação das barras de habilidade ao entrar na viewport =====
const skillBars = document.querySelectorAll('.skill-progress');

const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.style.width;
      bar.style.width = '0%';
      
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
      
      observer.unobserve(bar);
    }
  });
}, observerOptions);

skillBars.forEach(bar => observer.observe(bar));
