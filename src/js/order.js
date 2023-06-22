(() => {
  const refs = {
    openOrderBtn: document.querySelector("[data-order-open]"),
    closeOrderBtn: document.querySelector("[data-order-close]"),
    modal: document.querySelector("[data-order]"),
  };

  refs.openOrderBtn.addEventListener("click", toggleOrder);
  refs.closeOrderBtn.addEventListener("click", toggleOrder);

  function toggleOrder() {
    refs.modal.classList.toggle("is-hidden");
  }
})();