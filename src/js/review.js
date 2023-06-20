(() => {
  const refs = {
    openReviewBtn: document.querySelector("[data-review-open]"),
    closeReviewBtn: document.querySelector("[data-review-close]"),
    review: document.querySelector("[data-review]"),
  };

  refs.openReviewBtn.addEventListener("click", toggleModal);
  refs.closeReviewBtn.addEventListener("click", toggleModal);

  function toggleReview() {
    refs.review.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
  }
})();