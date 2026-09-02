// ======================
// EMOJI -> ICON REPLACEMENT
// ======================
// Swaps placeholder emoji (used as stand-in icons throughout the site) for
// consistent inline SVG icons, so they render identically across every
// OS/browser instead of relying on each platform's own emoji font.
const IconSystem = (function () {
    const STROKE = 'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';

    function svg(inner, opts) {
        opts = opts || {};
        const attrs = opts.fill ? 'fill="currentColor"' : STROKE;
        const color = opts.color ? ` style="color:${opts.color};display:inline-block;vertical-align:-0.125em;"` : ' style="display:inline-block;vertical-align:-0.125em;"';
        return `<svg class="icon-svg" viewBox="0 0 24 24" width="1em" height="1em"${color} ${attrs} aria-hidden="true" focusable="false">${inner}</svg>`;
    }

    const ICONS = {
        '⚡': svg('<path d="M13 2 4 14h7l-1 8 10-12h-7l1-8z"/>', { fill: true }),
        '📊': svg('<rect x="4" y="12" width="4" height="8" rx="1"/><rect x="10" y="7" width="4" height="13" rx="1"/><rect x="16" y="3" width="4" height="17" rx="1"/>'),
        '☁': svg('<path d="M7 18a4.5 4.5 0 010-9 5.5 5.5 0 0110.7-1.7A4.5 4.5 0 0117.5 18H7z"/>'),
        '🔒': svg('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>'),
        '🔄': svg('<path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3"/><path d="M18 2.7V8h-5.3M6 21.3V16h5.3"/>'),
        '🎓': svg('<path d="M2 8l10-5 10 5-10 5-10-5z"/><path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5"/><path d="M22 8v6"/>'),
        '📁': svg('<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>'),
        '💼': svg('<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>', { fill: true }),
        '🐙': svg('<path d="M12 .3C5.4.3 0 5.6 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.6 18.6.3 12 .3z"/>', { fill: true }),
        '✉': svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
        '🌙': svg('<path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/>', { fill: true }),
        '☀': svg('<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8"/>'),
        '📅': svg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>'),
        '📝': svg('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>'),
        '👤': svg('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>'),
        '✅': svg('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9"/>'),
        '☑': svg('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 12l3.5 3.5L17 8"/>'),
        '💡': svg('<path d="M9 18h6M10 22h4"/><path d="M12 2a6.5 6.5 0 00-4 11.6c.6.5 1 1.5 1 2.4h6c0-.9.4-1.9 1-2.4A6.5 6.5 0 0012 2z"/>'),
        '📞': svg('<path d="M22 16.9v3a2 2 0 01-2.2 2 19.7 19.7 0 01-8.6-3 19.5 19.5 0 01-6-6 19.7 19.7 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 1.9.6 2.7a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.3z"/>'),
        '🔑': svg('<circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L20 3M17 6l3 3M14 9l2 2"/>'),
        '🐦': svg('<path d="M4 4l16 16M20 4L4 20"/>'),
        '👍': svg('<path d="M7 22V11"/><path d="M2 13v7a2 2 0 002 2h12.6a2 2 0 002-1.7l1.3-8A2 2 0 0018 10h-5.5l1-4.6A2 2 0 0011.6 3L7 11H2z"/>'),
        '🎯': svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>'),
        '🏢': svg('<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 21v-4h6v4"/><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M8 15h.01M16 15h.01"/>'),
        '👥': svg('<circle cx="8.5" cy="8" r="3"/><path d="M2 20c0-3.6 2.9-6.5 6.5-6.5S15 16.4 15 20"/><circle cx="17" cy="9" r="2.3"/><path d="M15.5 13.5c2.4.3 4.5 2.3 4.5 6"/>'),
        '💰': svg('<circle cx="12" cy="12" r="9"/><path d="M12 6.5v11"/><path d="M9.3 9.2a2.7 2.7 0 012.7-1.7c1.5 0 2.7.9 2.7 2s-1.2 2-2.7 2-2.7.9-2.7 2 1.2 2 2.7 2a2.7 2.7 0 002.7-1.6"/>'),
        '🚀': svg('<path d="M12 2c3 2 5 6.5 5 10.3 0 2.2-1 4-2 5.1l-3 2.9-3-2.9c-1-1.1-2-3-2-5.1C7 8.5 9 4 12 2z"/><circle cx="12" cy="9.5" r="1.5" fill="currentColor"/><path d="M8 15.5l-3 5.2 5-3M16 15.5l3 5.2-5-3"/>'),
        '🌐': svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15.3 15.3 0 010 18M12 3a15.3 15.3 0 000 18"/>'),
        '💬': svg('<path d="M21 11.5a8.4 8.4 0 01-8.5 8.4 8.4 8.4 0 01-4-1L3 21l1.2-4.5a8.4 8.4 0 01-1-4A8.4 8.4 0 0112.5 4a8.4 8.4 0 018.5 7.5z"/>'),
        '🌍': svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15.3 15.3 0 010 18M12 3a15.3 15.3 0 000 18"/>'),
        '🤝': svg('<circle cx="7" cy="12" r="3.2"/><circle cx="17" cy="12" r="3.2"/><path d="M10.2 12h3.6"/>'),
        '📈': svg('<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'),
        '📉': svg('<path d="M3 7l6 6 4-4 8 8"/><path d="M21 11v6h-6"/>'),
        '📧': svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
        '🛡': svg('<path d="M12 2l8 4v6c0 5-3.5 8.7-8 10-4.5-1.3-8-5-8-10V6l8-4z"/>'),
        '🔍': svg('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>'),
        '🏆': svg('<path d="M8 4h8v5a4 4 0 01-8 0V4z"/><path d="M8 4H5a3 3 0 003 3M16 4h3a3 3 0 01-3 3"/><path d="M12 13v4M9 21h6M10 17h4v4h-4v-4z"/>'),
        '📚': svg('<path d="M4 4.5A2.5 2.5 0 016.5 2H20v17H6.5A2.5 2.5 0 004 21.5v-17z"/><path d="M20 19H6.5a2.5 2.5 0 000 5H20"/>'),
        '🤖': svg('<rect x="5" y="8" width="14" height="11" rx="2"/><circle cx="9" cy="13.2" r="1.2" fill="currentColor"/><circle cx="15" cy="13.2" r="1.2" fill="currentColor"/><path d="M12 8V4M9 4h6M4 12H2M22 12h-2"/>'),
        '🛠': svg('<path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.8 2.8-2-2 2.8-2.8z"/>'),
        '📋': svg('<rect x="6" y="4" width="12" height="17" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 11h6M9 15h6"/>'),
        '📱': svg('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),
        '📄': svg('<path d="M6 2h9l5 5v15H6V2z"/><path d="M15 2v5h5"/>'),
        '🔐': svg('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/><circle cx="12" cy="15.5" r="1.3" fill="currentColor"/>'),
        '🖥': svg('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>'),
        '🟢': svg('<circle cx="12" cy="12" r="8"/>', { fill: true, color: '#16a34a' }),
        '🏠': svg('<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'),
        '👋': svg('<path d="M9 11.5V5a1.5 1.5 0 013 0v5.5M12 10V4a1.5 1.5 0 013 0v7M15 11V7a1.5 1.5 0 013 0v6.5c0 3.9-2.2 6.5-6 6.5s-5.7-2.5-6.4-4.6l-1.4-3.4c-.4-1.2.5-2.3 1.7-1.9L9 11.5"/>'),
        '⚙': svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.6V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001-1.6V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.6 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.6 1z"/>'),
        '💻': svg('<rect x="4" y="4" width="16" height="10" rx="1"/><path d="M2 18h20"/>'),
        '📦': svg('<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>'),
        '😊': svg('<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>')
    };

    const KEYS = Object.keys(ICONS).sort((a, b) => b.length - a.length);
    const PATTERN = new RegExp('(' + KEYS.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\uFE0F?', 'gu');

    function replaceInTextNode(node) {
        const text = node.nodeValue;
        if (!PATTERN.test(text)) return;
        PATTERN.lastIndex = 0;

        const frag = document.createDocumentFragment();
        let lastIndex = 0;
        let match;
        while ((match = PATTERN.exec(text)) !== null) {
            if (match.index > lastIndex) {
                frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
            }
            const iconMarkup = ICONS[match[1]];
            if (iconMarkup) {
                const wrapper = document.createElement('span');
                wrapper.className = 'icon';
                wrapper.innerHTML = iconMarkup;
                frag.appendChild(wrapper);
            } else {
                frag.appendChild(document.createTextNode(match[0]));
            }
            lastIndex = PATTERN.lastIndex;
        }
        if (lastIndex < text.length) {
            frag.appendChild(document.createTextNode(text.slice(lastIndex)));
        }
        node.parentNode.replaceChild(frag, node);
    }

    function replaceAll(root) {
        const skipTags = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'NOSCRIPT']);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                if (node.parentElement && skipTags.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        const nodes = [];
        let n;
        while ((n = walker.nextNode())) nodes.push(n);
        nodes.forEach(replaceInTextNode);
    }

    return { ICONS, replaceAll };
})();

// ======================
// ANALYTICS (Google Analytics 4)
// ======================
(function () {
    const GA_MEASUREMENT_ID = 'G-J9E90EBL08';

    if (!GA_MEASUREMENT_ID) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
})();

// ======================
// THEME MANAGEMENT
// ======================
class ThemeManager {
    constructor() {
        this.theme = this.getInitialTheme();
        this.applyTheme(this.theme);
    }

    getInitialTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.theme = theme;
        this.updateThemeIcon();
        this.updateThemeImages();
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    updateThemeIcon() {
        const icon = document.getElementById('theme-icon');
        if (icon) {
            icon.innerHTML = IconSystem.ICONS[this.theme === 'light' ? '🌙' : '☀'];
        }
    }

    updateThemeImages() {
        const themeImages = document.querySelectorAll('.theme-image');
        themeImages.forEach(img => {
            const lightSrc = img.getAttribute('data-light');
            const darkSrc = img.getAttribute('data-dark');
            if (lightSrc && darkSrc) {
                img.src = this.theme === 'light' ? lightSrc : darkSrc;
            }
        });
    }
}

// ======================
// MOBILE MENU
// ======================
class MobileMenu {
    constructor() {
        this.menuButton = document.getElementById('mobile-menu-btn');
        this.menu = document.getElementById('nav-menu');
        this.menuLinks = document.querySelectorAll('.nav-links a');

        if (this.menuButton && this.menu) {
            this.init();
        }
    }

    init() {
        this.menuButton.addEventListener('click', () => this.toggleMenu());

        // Close menu when clicking on a link
        this.menuLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.menu.contains(e.target) && !this.menuButton.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.menu.classList.toggle('active');
        this.menuButton.classList.toggle('active');
    }

    closeMenu() {
        this.menu.classList.remove('active');
        this.menuButton.classList.remove('active');
    }
}

// ======================
// SMOOTH SCROLLING
// ======================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ======================
// SCROLL ANIMATIONS
// ======================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ======================
// ACTIVE NAV LINK
// ======================
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ======================
// BLOG FILTERING
// ======================
class BlogFilter {
    constructor() {
        this.categoryButtons = document.querySelectorAll('.category-filter');
        this.articles = document.querySelectorAll('.blog-card');

        if (this.categoryButtons.length > 0) {
            this.init();
        }
    }

    init() {
        this.categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                this.filterArticles(category);
                this.updateActiveButton(button);
            });
        });
    }

    filterArticles(category) {
        this.articles.forEach(article => {
            if (category === 'all' || article.getAttribute('data-category') === category) {
                article.style.display = 'block';
                setTimeout(() => article.classList.add('animate-in'), 10);
            } else {
                article.style.display = 'none';
                article.classList.remove('animate-in');
            }
        });
    }

    updateActiveButton(activeButton) {
        this.categoryButtons.forEach(button => {
            button.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
}

// ======================
// SHARE BUTTONS
// ======================
function initShareButtons() {
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);

            let shareUrl = '';

            switch(platform) {
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
            }

            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400');
            }
        });
    });
}

// ======================
// INITIALIZATION
// ======================
document.addEventListener('DOMContentLoaded', () => {
    // Replace placeholder emoji with consistent inline SVG icons
    IconSystem.replaceAll(document.body);

    // Initialize theme manager
    window.themeManager = new ThemeManager();

    // Initialize mobile menu
    new MobileMenu();

    // Initialize other features
    initSmoothScroll();
    initScrollAnimations();
    initActiveNavLink();
    new BlogFilter();
    initShareButtons();

    // Theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            window.themeManager.toggleTheme();
        });
    }

    // Language selector - set correct selected option based on current page
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        const currentPath = window.location.pathname;
        const options = languageSelector.options;
        
        for (let i = 0; i < options.length; i++) {
            const optionValue = options[i].value;
            // Check if current path ends with the option value or matches the pattern
            if (currentPath.endsWith(optionValue) || 
                currentPath.endsWith(optionValue.replace('index.html', '')) ||
                (optionValue.includes('/en/') && currentPath.includes('/en/')) ||
                (optionValue.includes('/es/') && currentPath.includes('/es/')) ||
                (!optionValue.includes('/en/') && !optionValue.includes('/es/') && !currentPath.includes('/en/') && !currentPath.includes('/es/'))) {
                
                // More precise check
                const isEnglish = currentPath.includes('/en/');
                const isSpanish = currentPath.includes('/es/');
                const isPortuguese = !isEnglish && !isSpanish;
                
                const optionIsEnglish = optionValue.includes('/en/') || (optionValue === 'index.html' && document.documentElement.lang === 'en');
                const optionIsSpanish = optionValue.includes('/es/') || optionValue.includes('../es/');
                const optionIsPortuguese = !optionIsEnglish && !optionIsSpanish && (optionValue.includes('../index.html') || (optionValue === 'index.html' && document.documentElement.lang === 'pt-BR'));
                
                if ((isEnglish && (optionValue === 'index.html' || optionValue.endsWith('/index.html')) && !optionValue.includes('../')) ||
                    (isSpanish && optionIsSpanish) ||
                    (isPortuguese && optionIsPortuguese)) {
                    // Skip, will be handled below
                }
            }
        }
        
        // Simpler approach: detect language from URL path
        const path = window.location.pathname;
        let currentLang = 'pt'; // default
        
        if (path.includes('/en/')) {
            currentLang = 'en';
        } else if (path.includes('/es/')) {
            currentLang = 'es';
        }
        
        // Find and select the correct option
        for (let i = 0; i < options.length; i++) {
            const optVal = options[i].value;
            const isEnOption = optVal.includes('/en/') || (optVal === 'index.html' && currentLang === 'en') || (!optVal.includes('../') && !optVal.includes('/es/') && currentLang === 'en');
            const isEsOption = optVal.includes('/es/') || optVal.includes('../es/');
            const isPtOption = optVal.includes('../index.html') || (optVal === 'index.html' && currentLang === 'pt') || (!optVal.includes('/en/') && !optVal.includes('/es/') && optVal.includes('index.html') && currentLang === 'pt');
            
            if ((currentLang === 'en' && options[i].text === 'English') ||
                (currentLang === 'es' && options[i].text === 'Español') ||
                (currentLang === 'pt' && options[i].text === 'Português')) {
                languageSelector.selectedIndex = i;
                break;
            }
        }
    }
});

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            window.themeManager.applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// ======================
// CONTACT FORM SUCCESS MESSAGE
// ======================
(function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get('enviado') === '1') {
        const successBox = document.getElementById('form-success');
        const form = document.getElementById('contact-form');
        if (successBox) {
            successBox.style.display = 'block';
            successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (form) {
            form.style.display = 'none';
        }
        params.delete('enviado');
        const cleanUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
        window.history.replaceState({}, document.title, cleanUrl);
    }
})();
