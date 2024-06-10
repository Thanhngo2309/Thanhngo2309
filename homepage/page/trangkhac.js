const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Function to set the dark mode icon
function updateIcon(isDarkMode) {
    const toggleTheme = document.querySelector('.toggle-theme');
    if (isDarkMode) {
        toggleTheme.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        toggleTheme.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Function to apply the dark mode
function applyDarkMode(isDarkMode) {
    const body = document.body;
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
    updateIcon(isDarkMode);
}

// Check the saved theme in localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    applyDarkMode(isDarkMode);
});

// Toggle dark mode and save the preference to localStorage
const toggleTheme = document.querySelector('.toggle-theme');

toggleTheme.addEventListener('click', () => {
    const body = document.body;
    const isDarkMode = !body.classList.contains('dark-mode');
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
    updateIcon(isDarkMode);
});
