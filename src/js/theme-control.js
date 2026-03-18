window.ThemeControl = (function () {
  const htmlElement = document.documentElement;

  const ThemeControl = {
    settings: {
      theme: localStorage.getItem("theme") || "dark",
      fontSize: parseInt(localStorage.getItem("fontSize")) || 16,
    },
    minFontSize: 14,
    maxFontSize: 24,

    init() {
      this.applyTheme(this.settings.theme);
      this.applyFontSize(this.settings.fontSize);
      this.attachEventListeners();
    },

    getSettings() {
      return {
        mode: this.settings.theme,
        fontSize: this.settings.fontSize,
      };
    },

    applyTheme(theme) {
      const themeIcon = document.getElementById("themeIcon");
      if (theme === "light") {
        htmlElement.setAttribute("data-theme", "light");
        if (themeIcon) themeIcon.classList.replace("ph-moon", "ph-sun");
      } else {
        htmlElement.removeAttribute("data-theme");
        if (themeIcon) themeIcon.classList.replace("ph-sun", "ph-moon");
      }
      this.settings.theme = theme;
      localStorage.setItem("theme", theme);
      window.dispatchEvent(
        new CustomEvent("themeChanged", { detail: { theme } }),
      );
    },

    setMode(mode) {
      this.applyTheme(mode);
    },

    applyFontSize(size) {
      htmlElement.style.fontSize = size + "px";
      this.settings.fontSize = size;
      localStorage.setItem("fontSize", size);
    },

    increaseFontSize() {
      if (this.settings.fontSize < this.maxFontSize) {
        this.applyFontSize(this.settings.fontSize + 1);
      }
    },

    decreaseFontSize() {
      if (this.settings.fontSize > this.minFontSize) {
        this.applyFontSize(this.settings.fontSize - 1);
      }
    },

    attachEventListeners() {
      document.addEventListener("click", (e) => {
        const themeBtn = e.target.closest("#themeToggleBtn");
        const fontIncreaseBtn = e.target.closest("#fontIncreaseBtn");
        const fontDecreaseBtn = e.target.closest("#fontDecreaseBtn");

        if (themeBtn) {
          const nextTheme = this.settings.theme === "light" ? "dark" : "light";
          this.applyTheme(nextTheme);
        }
        if (fontIncreaseBtn) {
          this.increaseFontSize();
        }
        if (fontDecreaseBtn) {
          this.decreaseFontSize();
        }
      });
    },
  };

  ThemeControl.init();
  return ThemeControl;
})();
