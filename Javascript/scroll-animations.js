
/* Geef aan dat JavaScript beschikbaar is. */
document.documentElement.classList.add("js-enabled");

/* Zoek alle onderdelen die een scrollanimatie krijgen. */
const revealElements = document.querySelectorAll(".reveal");

/* Controleer of de browser IntersectionObserver ondersteunt. */
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");

                    /* We hoeven dit element niet opnieuw te volgen. */
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });
} else {
    /* Terugvaloptie voor oudere browsers. */
    revealElements.forEach(function (element) {
        element.classList.add("is-visible");
    });
}
