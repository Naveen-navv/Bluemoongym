const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(
  ".header__content h4, .header__content .section__header",
  {
    ...scrollRevealOption,
    delay: 500,
  }
);

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".fcf-body", {
  ...scrollRevealOption,
  delay:500,
});

ScrollReveal().reveal(".trainer__grid", {
  ...scrollRevealOption,
  delay:500,
});

ScrollReveal().reveal(".plan__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
  },
  autoplay: {
      delay: 2000,
  },

});

function empty() {
    var x;
    x = document.getElementById("Name").value;
    if (x == "") {
        alert("Please enter a Name");
        return false;
    };
    var y;
    y = document.getElementById("Email").value;
    if (y == "") {
        alert("Please enter a email");
        return false;
    };
    var z;
    z = document.getElementById("Message").value;
    if (z == "") {
        alert("Please type a message");
        return false;
    };
    if (x !== "") {
       alert("Your details have been submitted. We will contact you shortly")
       return false;
    }


}

