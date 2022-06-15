const submitButton = document.querySelector(".rating-component__button");
const ratingComponent = document.querySelector(".rating-component");
const thankYouComponent = document.querySelector(".thank-you");
const ratings = document.querySelectorAll(".rating-component__number");
const receivedRating = document.querySelector(".submitted-rating");
let submittedRating;

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function () {
    submittedRating = ratings[i].textContent;
    receivedRating.textContent = submittedRating;
  });
}

submitButton.addEventListener("click", function () {
  ratingComponent.classList.toggle("hidden");
  thankYouComponent.classList.toggle("hidden");
});
