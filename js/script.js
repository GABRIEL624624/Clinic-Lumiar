const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("bookingForm");
const message = document.getElementById("formMessage");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");

  message.textContent = `Obrigado, ${name}! Sua solicitação foi registrada neste protótipo.`;
  form.reset();
});

const phone = document.querySelector('input[name="phone"]');
phone?.addEventListener("input", (event) => {
  let value = event.target.value.replace(/\D/g, "").slice(0, 11);
  if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  }
  event.target.value = value;
});

const carousel = document.querySelector(".carousel-track");

const nextButton = document.querySelector(".carousel-btn.next");
const prevButton = document.querySelector(".carousel-btn.prev");

nextButton.addEventListener("click", () => {

    carousel.scrollBy({
        left: 330,
        behavior: "smooth"
    });

});


prevButton.addEventListener("click", () => {

    carousel.scrollBy({
        left: -330,
        behavior: "smooth"
    });

});

let autoCarousel = setInterval(() => {

    carousel.scrollBy({
        left: 330,
        behavior: "smooth"
    });

    // volta para o início quando chegar no final
    if (
        carousel.scrollLeft + carousel.clientWidth
        >= carousel.scrollWidth - 10
    ) {

        carousel.scrollTo({
            left: 0,
            behavior: "smooth"
        });

    }

}, 3500);