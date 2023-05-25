$(document).ready(function () {
  $("#nav-icon3").click(function () {
    $(this).toggleClass("open");
  });
});

let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    100: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
