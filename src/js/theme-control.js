(function() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'light') {
            htmlElement.setAttribute('data-theme', 'light');
            if (themeIcon) themeIcon.classList.replace('ph-moon', 'ph-sun');
        } else {
            htmlElement.removeAttribute('data-theme');
            if (themeIcon) themeIcon.classList.replace('ph-sun', 'ph-moon');
        }
    }

    // Initialize Theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    // Toggle Logic
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isLight = htmlElement.getAttribute('data-theme') === 'light';
            const nextTheme = isLight ? 'dark' : 'light';
            applyTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }
})();
