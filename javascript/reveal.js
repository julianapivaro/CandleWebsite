// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should have the reveal on scroll effect
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
    // Configuration options for the Intersection Observer
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the viewport
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    };
  
    // Create an Intersection Observer to track when elements enter the viewport
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Check if the element is intersecting (visible in the viewport)
        if (entry.isIntersecting) {
          // Add the 'visible' class to trigger the reveal animation
          entry.target.classList.add('visible');
          // Stop observing the element after it has been revealed
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    // Start observing each element that should have the reveal effect
    revealElements.forEach(element => {
      observer.observe(element);
    });
  });