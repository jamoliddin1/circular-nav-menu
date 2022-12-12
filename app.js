$(document).ready(function () {
  $(".toggle").click(function () {
    $(".circle-menu").toggleClass("active");
    $(".toggle").toggleClass("active");
  })

  const liEl = document.querySelectorAll(".circle-menu__item");
  function activate() {
    liEl.forEach((el) => {
      el.classList.remove("active");
      this.classList.add("active");
    })
  }

  liEl.forEach((el) => {
    el.addEventListener("click", activate)
  })
})