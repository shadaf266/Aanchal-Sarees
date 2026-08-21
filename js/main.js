document.addEventListener("DOMContentLoaded", function () {

    const heroSlider = new Swiper(".hero-slider", {
        loop: true,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        speed: 800,
    });


    const announcementSlider = new Swiper(".announcement-slider", {
        direction: "vertical",
        loop: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        speed: 500,
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const announcementSlider = new Swiper(".announcement-slider", {
        direction: "vertical",
        loop: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        speed: 500,
    });


    const heroSlider = new Swiper(".hero-slider", {
        loop: true,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        speed: 800,
    });


    const categorySlider = new Swiper(".category-slider", {
        loop: true,

        slidesPerView: 6,
        spaceBetween: 20,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 12,
            },

            576: {
                slidesPerView: 3,
                spaceBetween: 16,
            },

            768: {
                slidesPerView: 4,
                spaceBetween: 18,
            },

            992: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
        },
    });

});

/* =========================================
   NEW SEASON PRODUCT SLIDER
========================================= */

const seasonSlider = new Swiper(".season-slider", {

    loop: true,

    slidesPerView: 4,

    spaceBetween: 20,

    speed: 700,

    grabCursor: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {

        /* Mobile */
        0: {
            slidesPerView: 1.5,
            spaceBetween: 12,
        },

        /* Large Mobile */
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        /* Tablet */
        768: {
            slidesPerView: 3,
            spaceBetween: 18,
        },

        /* Desktop */
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },

    },

});

const weaveSlider = new Swiper(".weave-slider", {
    slidesPerView: 2,
    spaceBetween: 8,

    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 10
        },

        768: {
            slidesPerView: 4,
            spaceBetween: 12
        },

        992: {
            slidesPerView: 5,
            spaceBetween: 12
        },

        1200: {
            slidesPerView: 6,
            spaceBetween: 12
        }
    }
});

const mainHeader = document.querySelector(".main-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        mainHeader.classList.add("is-fixed");
        document.body.classList.add("header-fixed");
    } else {
        mainHeader.classList.remove("is-fixed");
        document.body.classList.remove("header-fixed");
    }
});