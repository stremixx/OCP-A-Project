document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
        fadeInElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add("visible");
            }
        });
    };

    // Ensure the body fades in on page load
    const body = document.querySelector("body.fade-in");
    if (body) {
        body.classList.add("visible");
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on page load in case elements are already in view
});