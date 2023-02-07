"use strict";

const buttons = document.querySelectorAll(".features__btn-item");
const contents = document.querySelectorAll(".features__content-item");

const openClass = (e) => {
  const clickedBtn = e.target;
  const clickedBtnAttr = clickedBtn.dataset.btn;

  buttons.forEach((item) => {
    item.classList.remove("features__btn-item_active");
    clickedBtn.classList.add("features__btn-item_active");
  });

  contents.forEach((item) => {
    // First option
    item.classList.remove("features__content-item_active");
    if (item.id === clickedBtnAttr) {
      item.classList.add("features__content-item_active");
    }
    //  Second option
    // document.querySelector(`#${clickedBtnAttr}`)
    // .classList.add("features__content-item_active");
  });
};

buttons.forEach((item) => {
  item.addEventListener("click", openClass);
});
