document.addEventListener('DOMContentLoaded', function () {
    const slideshowElement = document.querySelector("[data-js-slideshow]");
    const slideshow = (ele) => {

        let index = 0;
        const slides = ele.querySelectorAll("[data-js-slide]");
        const back = document.querySelector("[data-js-slideshow-gui='back']");
        const forward = document.querySelector("[data-js-slideshow-gui='forward']");

        const goToSlide = (add) => {
            newIndex = index + add;
            if (newIndex < 0) {
                newIndex = slides.length - 1;
            } else if (newIndex > slides.length - 1) {
                newIndex = 0;
            };
            slides[index].classList.remove("is-active");
            slides[newIndex].classList.add("is-active");
            index = newIndex;
        };

        back.addEventListener("click", (event) => {
            event.preventDefault();
            goToSlide(-1);
        });

        forward.addEventListener("click", (event) => {
            event.preventDefault();
            goToSlide(1);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") {
                goToSlide(-1);
            }
            if (event.key === "ArrowRight") {
                goToSlide(1);
            }
        });
    };
});