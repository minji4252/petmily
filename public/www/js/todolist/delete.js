window.addEventListener("load", function () {
  const completeList = document.querySelector(".todo-left-detail");
  const deleteIcon = document.querySelector(".todo-left-detail-delete");

  deleteIcon.addEventListener("click", () => {
    completeList.innerHTML = "";
    completeList.style.borderBottom = "none";
  });
});
