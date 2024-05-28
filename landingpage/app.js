const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})

const toggleTheme = document.querySelector('.toggle-theme');
const body = document.body;

toggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update the icon based on the current theme
  if (body.classList.contains('dark-mode')) {
    toggleTheme.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    toggleTheme.innerHTML = '<i class="fas fa-sun"></i>';
  }
});