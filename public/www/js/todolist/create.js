window.addEventListener("load", function () {
  const checkBox = document.querySelector(".todo-right-detail-left-icon");

  checkBox.addEventListener("click", () => {
    checkBox.classList.toggle("open");
    console.log(checkBox);
  });
});
