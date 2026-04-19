document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const indicator = document.querySelector('.tab-indicator');

    // --- Timeline for Intro Animations ---
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
        startAt: { y: 30 },
        onComplete: () => {
            // Animate initial active panel
            const initialPanel = document.querySelector('.tab-panel.active');
            if (initialPanel) {
                gsap.fromTo(initialPanel,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
                );
            }
        }
    }, '-=0.9');

    // --- Core Tab Switching Logic ---
    function switchTab(targetId, animate = true) {
        const btn = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
        const targetPanel = document.getElementById(targetId);
        const currentPanel = document.querySelector('.tab-panel.active');

        if (!btn || !targetPanel || currentPanel === targetPanel) return;

        // Update buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update indicator
        gsap.to(indicator, {
            left: btn.offsetLeft,
            width: btn.offsetWidth,
            duration: animate ? 0.5 : 0,
            ease: 'back.out(1.2)'
        });

        // Update panels
        if (animate) {
            gsap.to(currentPanel, {
                opacity: 0,
                y: 10,
                duration: 0.3,
                onComplete: () => {
                    currentPanel.classList.remove('active');
                    targetPanel.classList.add('active');
                    lucide.createIcons();

                    gsap.fromTo(targetPanel,
                        { opacity: 0, y: 10 },
                        { opacity: 1, y: 0, duration: 0.4, onComplete: () => {
                            // Specialized report entrance
                            if (targetId === 'milestone-6' || targetId === 'milestone-7') {
                                gsap.from('.finding-box, .report-section', {
                                    opacity: 0,
                                    y: 20,
                                    scale: 0.98,
                                    duration: 0.8,
                                    stagger: 0.1,
                                    ease: 'power3.out'
                                });
                            }
                        }}
                    );
                }
            });
        } else {
            currentPanel.classList.remove('active');
            targetPanel.classList.add('active');
            gsap.set(targetPanel, { opacity: 1, y: 0 });
            lucide.createIcons();
        }

        // Update URL hash without causing a jump
        if (window.location.hash !== `#${targetId}`) {
            history.pushState(null, null, `#${targetId}`);
        }
    }

    // --- Event Listeners ---
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');
            switchTab(targetId);
        });

        // Hover animations
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn.querySelector('.tab-btn-content'), { y: -2, duration: 0.2 });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn.querySelector('.tab-btn-content'), { y: 0, duration: 0.2 });
        });
    });

    // Handle initial routing from URL hash
    function handleInitialRouting() {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            // Find if a button exists for this hash
            const btn = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
            if (btn) {
                // Instantly switch to this tab before intro animations finish
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanels.forEach(p => p.classList.remove('active'));
                
                btn.classList.add('active');
                const targetPanel = document.getElementById(hash);
                targetPanel.classList.add('active');

                // Initial indicator set
                gsap.set(indicator, {
                    left: btn.offsetLeft,
                    width: btn.offsetWidth
                });
            }
        }
    }

    // Listen for back/forward buttons
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '');
        if (hash) switchTab(hash);
    });

    handleInitialRouting();
});
