document.addEventListener('DOMContentLoaded', () => {
    // Select all the sections you want to animate
    const sections = document.querySelectorAll('.section');

    // Options for the IntersectionObserver (when 10% of the element is visible)
    const observerOptions = {
        threshold: 0.1
    };

    // Create an IntersectionObserver to track when sections come into view
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the section is visible, add the 'visible' class to trigger animation
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation has triggered
            }
        });
    }, observerOptions);

    // Observe each section element for visibility
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
