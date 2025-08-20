// Default language constant for easier maintenance
const DEFAULT_LANG = 'ro';

const i18nElements = Array.from(document.querySelectorAll('[data-i18n]')); // Cache for efficiency

function setLanguage(lang) {
  if (!translations[lang]) {
	// If language is not supported, fallback to default
	lang = DEFAULT_LANG;
  }
  localStorage.setItem('selectedLang', lang);
  document.documentElement.setAttribute('lang', lang);
  i18nElements.forEach(function(el) {
	const key = el.getAttribute('data-i18n');
	if (translations[lang] && translations[lang][key]) {
	  el.innerHTML = translations[lang][key];
	} else {
	  console.warn('Missing translation for key: "' + key + '" in language: "' + lang + '"');
	  el.innerHTML = 'Translation missing: ' + key; // user-friendly fallback
	}
  });
}

// Language selector logic
// All language selection event listeners are handled in languageSelector()

// Helper function to hide preloader overlay
function hidePreloaderOverlay() {
  $("#preloader-overlay").delay(150).fadeOut("slow");
}

// On page load, set language if already selected
window.addEventListener('DOMContentLoaded', function() {
  let lang = localStorage.getItem('selectedLang');
  if (!lang || !translations[lang]) {
	lang = DEFAULT_LANG;
	localStorage.setItem('selectedLang', lang);
  }
  setLanguage(lang);
/**
 * Adds click event listeners to all elements with the 'lang-btn' class,
 * allowing users to switch the website language dynamically.
 * Updates the language using setLanguage and hides the preloader overlay.
 */
function languageSelector() {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
	btn.addEventListener('click', function() {
	  const lang = btn.dataset.lang;
	  if (lang && translations[lang]) {
		setLanguage(lang);
		$("#preloader-overlay").delay(150).fadeOut("slow");
		// Optionally, reload or update content here
	  }
	});
  });
}

// Fade out overlay when a language is selected
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      overlay.style.opacity = "1";
      overlay.style.transition = "opacity 0.5s";
      setTimeout(function() {
        overlay.style.opacity = "0";
        setTimeout(function() {
          overlay.style.display = "none";
        }, 500); // Wait for fade out to finish
      }, 10);
    });
  });