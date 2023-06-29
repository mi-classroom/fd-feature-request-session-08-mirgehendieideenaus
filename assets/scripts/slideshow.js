document.addEventListener('DOMContentLoaded', function () {

    const path = "../assets/data/slide-show.json";

    async function getRecipes(url) {
        const request = await fetch(url);

        if (!request.ok) {
            throw new Error("HTTP error!");
        }

        const json = await request.json();

        return json;
    }

    async function createSlideShow() {
        const recipes = await getRecipes(path);
        const slideShowList = document.querySelector(".other-recipes-list");

        let firstElement = true;

        recipes.slides.forEach(recipe => {
            const listElement = document.createElement("li");

            listElement.setAttribute("class", "other-recipes-list__item");

            if (firstElement) {
                listElement.classList.add("is-active");
                firstElement = false;
            }

            listElement.setAttribute("data-js-slide", "");

            listElement.innerHTML = `
                <figure>
                    <img src="../images/other-recipes/${recipe.imagesrc}" alt="${recipe.caption}">
                    <figcaption>${recipe.caption}</figcaption>
                </figure>
            `;

            slideShowList.appendChild(listElement);
        });

        slideshow(slideshowElement);
    }

    createSlideShow();



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