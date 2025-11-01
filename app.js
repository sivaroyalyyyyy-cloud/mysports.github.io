// Dashboard interactions
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const closeNav = document.querySelector('.close-nav');
    const sidebar = document.querySelector('.sidebar');
    
    if (closeNav) {
        closeNav.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
        });
    }

    // Navigation item active state
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Mock live match updates (for demo)
    let overs = 18.2;
    const oversEl = document.querySelector('.overs');
    if (oversEl) {
        setInterval(() => {
            overs += 0.1;
            if (overs >= 20) overs = 0;
            oversEl.textContent = `(${overs.toFixed(1)} Overs)`;
        }, 5000);
    }
});
