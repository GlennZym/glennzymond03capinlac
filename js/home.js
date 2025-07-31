// section animation in SKILL section
// This script animates the skill bars when they come into view using Intersection Observer API
// It sets the width of each skill bar to 0 initially and then animates it to its target width
// The animation is triggered when the skill section is in view
document.addEventListener("DOMContentLoaded", function() {
    const skillSection = document.getElementById('skill');

    function animateBars() {
        document.querySelectorAll('.skill-bar-fill').forEach(function(bar) {
            const targetWidth = bar.getAttribute('style').match(/width:\s*([\d.]+%)/);
            bar.classList.remove('animated');
            bar.style.width = '0';
            setTimeout(function() {
                if (targetWidth) {
                    bar.classList.add('animated');
                    bar.style.width = targetWidth[1];
                }
            }, 350);
        });
    }

    // Intersection Observer for animation on view
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateBars();
            }
        });
    }, { threshold: 30 / 500 });

    if (skillSection) {
        observer.observe(skillSection);
    }
});
