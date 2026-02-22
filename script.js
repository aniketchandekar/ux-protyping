document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();
    // --- GSAP Intro Animations ---
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to('.heading', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        startAt: { y: 100 }
    })
        .to('.subheading', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            startAt: { y: 40 }
        }, '-=1.1')
        .to('.tabs-section', {
            opacity: 1,
            y: 0,
            duration: 1,
            startAt: { y: 30 }
        }, '-=0.9');

    // --- Tabs Logic ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const indicator = document.querySelector('.tab-indicator');

    function updateIndicator(btn) {
        const btnRect = btn.getBoundingClientRect();
        const navRect = btn.parentElement.getBoundingClientRect();

        gsap.to(indicator, {
            left: btn.offsetLeft,
            width: btn.offsetWidth,
            duration: 0.5,
            ease: 'back.out(1.2)'
        });
    }

    // Initialize indicator position
    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn) {
        gsap.set(indicator, {
            left: activeBtn.offsetLeft,
            width: activeBtn.offsetWidth
        });
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');
            const currentPanel = document.querySelector('.tab-panel.active');
            const targetPanel = document.getElementById(targetId);

            if (currentPanel === targetPanel) return;

            // Update buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            updateIndicator(btn);

            // Update panels with animation
            gsap.to(currentPanel, {
                opacity: 0,
                y: 10,
                duration: 0.3,
                onComplete: () => {
                    currentPanel.classList.remove('active');
                    targetPanel.classList.add('active');

                    // Re-init icons to ensure they render correctly in the new view
                    lucide.createIcons();

                    gsap.fromTo(targetPanel,
                        { opacity: 0, y: 10 },
                        { opacity: 1, y: 0, duration: 0.4 }
                    );
                }
            });
        });
    });

    // --- Microinteractions ---
    tabBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn.querySelector('span'), {
                y: -2,
                duration: 0.2
            });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn.querySelector('span'), {
                y: 0,
                duration: 0.2
            });
        });
    });
});
