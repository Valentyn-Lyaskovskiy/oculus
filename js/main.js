"use strict";
const buttons = document.querySelectorAll(".features__btn-item");
const contents = document.querySelectorAll(".features__content-item");

const openBtnClass = (e) => {
  const clickedBtn = e.target;
  const clickedBtnAttr = clickedBtn.dataset.btn;

  buttons.forEach((item) => {
    item.classList.remove("features__btn-item_active");
    clickedBtn.classList.add("features__btn-item_active");
  });

  contents.forEach((item) => {
    item.classList.remove("features__content-item_active");
    document
      .querySelector(`#${clickedBtnAttr}`)
      .classList.add("features__content-item_active");
  });
};

buttons.forEach((item) => {
  item.addEventListener("click", openBtnClass);
});
