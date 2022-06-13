const sumbitButton = document.querySelector(".rating-component__button");
const ratingComponent = document.querySelector(".rating-component");
const thankYouComponent = document.querySelector(".thank-you");

sumbitButton.addEventListener("click", function () {
  ratingComponent.classList.toggle("hidden");
  thankYouComponent.classList.toggle("hidden");
});
