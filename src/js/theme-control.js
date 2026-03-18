(function() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');
    const fontDecreaseBtn = document.getElementById('fontDecreaseBtn');
    const fontIncreaseBtn = document.getElementById('fontIncreaseBtn');
    const htmlElement = document.documentElement;

    // --- Theme Logic ---
    function applyTheme(theme) {
        if (theme === 'light') {
            htmlElement.setAttribute('data-theme', 'light');
            if (themeIcon) themeIcon.classList.replace('ph-moon', 'ph-sun');
        } else {
            htmlElement.removeAttribute('data-theme');
            if (themeIcon) themeIcon.classList.replace('ph-sun', 'ph-moon');
        }
    }

    const currentTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(currentTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isLight = htmlElement.getAttribute('data-theme') === 'light';
            const nextTheme = isLight ? 'dark' : 'light';
            applyTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
        });
    }

    // --- Font Size Logic ---
    let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;
    const minSize = 12;
    const maxSize = 24;

    function applyFontSize(size) {
        htmlElement.style.fontSize = size + 'px';
    }

    applyFontSize(currentFontSize);

    if (fontDecreaseBtn) {
        fontDecreaseBtn.addEventListener('click', () => {
            if (currentFontSize > minSize) {
                currentFontSize--;
                applyFontSize(currentFontSize);
                localStorage.setItem('fontSize', currentFontSize);
            }
        });
    }

    if (fontIncreaseBtn) {
        fontIncreaseBtn.addEventListener('click', () => {
            if (currentFontSize < maxSize) {
                currentFontSize++;
                applyFontSize(currentFontSize);
                localStorage.setItem('fontSize', currentFontSize);
            }
        });
    }
})();
