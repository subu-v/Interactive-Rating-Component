const submitButton = document.querySelector(".rating-component__button");
const ratingComponent = document.querySelector(".rating-component");
const thankYouComponent = document.querySelector(".thank-you");

const ratings = document.querySelectorAll(".rating-component__number");
const receivedRating = document.querySelector(".submitted-rating");

for (let i = 0; i < ratings.length; i++) {
  console.log("outside of the event");
  ratings[i].addEventListener("click", function () {
    console.log("inside of the event");

    receivedRating.textContent = ratings[i].textContent;
  });
}

submitButton.addEventListener("click", function () {
  ratingComponent.classList.toggle("hidden");
  thankYouComponent.classList.toggle("hidden");
});
