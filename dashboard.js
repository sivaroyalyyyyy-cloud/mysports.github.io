// Dashboard Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Update live match time
    let overs = 12.4;
    const oversEl = document.querySelector('.match-time');
    if (oversEl) {
        setInterval(() => {
            overs += 0.1;
            if (overs >= 20) overs = 0;
            oversEl.textContent = `${overs.toFixed(1)} Overs`;
        }, 5000);
    }

    // Kabaddi match timer
    let time = 1530; // 25:30 in seconds
    const kabaddiTimeEl = document.querySelectorAll('.match-time')[1];
    if (kabaddiTimeEl) {
        setInterval(() => {
            time--;
            if (time < 0) time = 1530;
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            kabaddiTimeEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });
    }

    // Watch Live buttons
    document.querySelectorAll('.watch-live').forEach(btn => {
        btn.addEventListener('click', () => {
            const matchType = btn.closest('.match-card').querySelector('.match-type').textContent;
            alert(`Opening ${matchType} live stream... (Demo)`);
        });
    });

    // Set Reminder buttons
    document.querySelectorAll('.set-reminder').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const eventName = e.target.closest('.event-card').querySelector('h3').textContent;
            btn.textContent = 'Reminder Set';
            btn.style.background = '#D1FAE5';
            btn.style.color = '#059669';
            setTimeout(() => {
                btn.textContent = 'Set Reminder';
                btn.style = '';
            }, 2000);
        });
    });

    // Notification bell
    const notifications = document.querySelector('.notifications');
    if (notifications) {
        notifications.addEventListener('click', () => {
            alert('No new notifications (Demo)');
        });
    }

    // Stats cards hover effect
    document.querySelectorAll('.stat-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.transition = 'transform 0.2s ease';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = '';
        });
    });
});