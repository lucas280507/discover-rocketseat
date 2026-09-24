// ===== Theme Toggle (Light / Dark Mode) =====
const themeToggle = document.getElementById('theme-toggle');

// Verifica se há tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.checked = true;
}

// Alterna entre os temas ao clicar no switch
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  }
});
