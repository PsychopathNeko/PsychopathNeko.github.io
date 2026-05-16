// ===== Language Toggle =====
function toggleLang() {
    var body = document.body;
    var isCurrentlyEN = !body.classList.contains('lang-cn');

    if (isCurrentlyEN) {
        body.classList.add('lang-cn');
        updateLangButtons('EN');
        updateTextContent('cn');
        localStorage.setItem('lang', 'cn');
    } else {
        body.classList.remove('lang-cn');
        updateLangButtons('中文');
        updateTextContent('en');
        localStorage.setItem('lang', 'en');
    }
}

function updateLangButtons(text) {
    var sidebarBtn = document.getElementById('langToggle');
    var mobileBtn = document.getElementById('langToggleMobile');
    if (sidebarBtn) sidebarBtn.textContent = text;
    if (mobileBtn) mobileBtn.textContent = text;
}

function updateTextContent(lang) {
    var elements = document.querySelectorAll('[data-en][data-cn]');
    elements.forEach(function(el) {
        var text = el.getAttribute('data-' + lang);
        if (text !== null) {
            el.innerHTML = text;
        }
    });
}

// ===== Mobile Menu Toggle =====
function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    var hamburger = document.getElementById('hamburger');
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('active');
}

// ===== Click Outside to Close =====
document.addEventListener('click', function(e) {
    var sidebar = document.getElementById('sidebar');
    var hamburger = document.getElementById('hamburger');
    var mobileHeader = document.getElementById('mobileHeader');

    if (!sidebar || !hamburger) return;
    if (!sidebar.classList.contains('open')) return;

    if (!sidebar.contains(e.target) && !mobileHeader.contains(e.target)) {
        sidebar.classList.remove('open');
        hamburger.classList.remove('active');
    }
});

// ===== On Page Load: Restore Language Preference =====
(function() {
    var savedLang = localStorage.getItem('lang');
    if (savedLang === 'cn') {
        document.body.classList.add('lang-cn');
        updateLangButtons('EN');
        updateTextContent('cn');
    }
})();
