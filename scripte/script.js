// Animation au scroll
const sections = document.querySelectorAll("section");

const reveal = () => {
    sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
