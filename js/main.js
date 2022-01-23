//
window.onload = function digital_fn() {
  // toggle-btn
  let toggle = document.querySelector("#toggle-btn");

  let toggleL1 = document.querySelector("#navlink1");
  let toggleL2 = document.querySelector("#navlink2");
  let toggleL3 = document.querySelector("#navlink3");
  let toggleL4 = document.querySelector("#navlink4");
  let toggleL5 = document.querySelector("#navlink5");
  let toggleL6 = document.querySelector("#navlink6");
  let toggle_main_area = document.getElementById("main-area");

  let collapse = document.querySelector("#collapse");

  toggle.addEventListener("click", function (event) {
    collapse.classList.toggle("active");

    toggle_main_area.addEventListener("click", function (event) {
      collapse.classList.remove("active");
    });
    toggleL1.addEventListener("click", function (event) {
      collapse.classList.remove("active");
    });
    toggleL2.addEventListener("click", function (event) {
      collapse.classList.remove("active");
    });
    toggleL3.addEventListener("click", function (event) {
      collapse.classList.remove("active");
    });
    toggleL4.addEventListener("click", function (event) {
      collapse.classList.remove("active");
    });
    toggleL5.addEventListener("click", function (event) {
      collapse.classList.remove("active");
    });
    toggleL6.addEventListener("click", function (event) {
      collapse.classList.remove("active");
    });
  });

  // [toggleL1, toggleL2, toggleL3].forEach((element) => {
  //   element.addEventListner("click", (e) => {
  //     console.log("someone hit me");
  //   });
  // });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // effect: 'fade',
    autoplay: {
      delay: 3000,
    },
    speed: 500,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // fadeEffect: { crossFade: true },
    // virtualTranslate: true,
    // effect: "fade",
    // effect: 'fade',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  AOS.init({
    once: true,
  });
};
