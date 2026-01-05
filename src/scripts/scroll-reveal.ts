/**
 * Scroll Reveal Animation Script
 * Uses Intersection Observer to animate elements when they enter the viewport
 */

function initScrollReveal() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    // Show all elements immediately if user prefers reduced motion
    document
      .querySelectorAll(
        ".reveal, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale"
      )
      .forEach((el) => {
        el.classList.add("revealed");
      });
    return;
  }

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px 0px -80px 0px", // Trigger slightly before element is fully visible
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Unobserve after revealing to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale"
  );
  revealElements.forEach((el) => observer.observe(el));
}

// Initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollReveal);
} else {
  initScrollReveal();
}

// Re-initialize after View Transitions navigation
document.addEventListener("astro:after-swap", initScrollReveal);

export { initScrollReveal };
