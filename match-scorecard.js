// Match Scorecard JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Add click handler for create new match button
    const newMatchBtn = document.querySelector('.new-match');
    if (newMatchBtn) {
        newMatchBtn.addEventListener('click', () => {
            // TODO: Implement new match creation flow
            alert('Create new match functionality coming soon!');
        });
    }

    // Add hover animations for score cards
    const scoreCards = document.querySelectorAll('.team-card');
    scoreCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Initialize menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // TODO: Implement menu toggle functionality
            alert('Menu functionality coming soon!');
        });
    }
});