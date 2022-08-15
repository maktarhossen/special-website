
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

// ==================================
// Create Portfolio Componennnt
// ==================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add(".p-btn-active");


    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
});

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      // scrooll to top button
      const heroSection = document.querySelector(".section-hero");
      const footerElem = document.querySelector(".section-footer");

      const scroollElement = document.createElement("div");
      scroollElement.classList.add("scroollTop-style");
      scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scscroollTop"></ion-icon>`;
      footerElem.after(scroollElement);
      const scroollTop = () => {
        heroSection.scrollIntoView({behavior:"smooth"});
      }
      scroollElement.addEventListener("click", scroollTop);

      // counter numbers //
const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;

counterNum.forEach((curElem) => {

  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    const initialNum = parseInt(curElem.innerText);

    const incrementNumber = Math.trunc(targetNumber / speed);

    if (initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;

      setTimeout(updateNumber, 10);
    }
  };
  updateNumber();
})