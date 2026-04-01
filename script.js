const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll(".content-block, .summary-strip article, .hero-copy, .hero-visual").forEach((node) => {
  node.classList.add("fade-in");
  observer.observe(node);
});
