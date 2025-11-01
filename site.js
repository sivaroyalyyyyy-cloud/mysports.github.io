// Shared site JS: nav highlighting, menu toggle, password eye toggles
document.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav link
    try {
        const navLinks = document.querySelectorAll('.top-nav a');
        const path = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(a => {
            const href = a.getAttribute('href');
            if (href === path) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });
    } catch (e) {
        // ignore if no nav
    }

    // Menu toggle (if a sidebar exists)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });
    }

    // Eye buttons to toggle password visibility
    document.querySelectorAll('button.eye').forEach(btn => {
        btn.addEventListener('click', (ev) => {
            ev.preventDefault();
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;
            if (input.type === 'password') {
                input.type = 'text';
                btn.textContent = '🙈';
            } else {
                input.type = 'password';
                btn.textContent = '👁️';
            }
        });
    });

    // Small helper: add .hover behavior via keyboard focus for accessibility
    document.querySelectorAll('.hover-lift, .hover-grow, .btn-animate').forEach(el => {
        el.addEventListener('focus', () => el.classList.add('focused'));
        el.addEventListener('blur', () => el.classList.remove('focused'));
    });
});