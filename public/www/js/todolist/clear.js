window.addEventListener("load", () => {
  const completeList = document.querySelector(".todo-left-detail");
  const clearButton = document.querySelector(".todo-left-clear");
  const clearModalOpen = document.querySelector(".realdelete");
  const clearYes = document.querySelector(".delete-button.yes");
  const clearNo = document.querySelector(".delete-button.no");

  let clearOpen = false;

  clearButton.addEventListener("click", () => {
    clearOpen = !clearOpen;
    if (clearOpen === true) {
      clearModalOpen.classList.toggle("open");
    }
  });

  clearYes.addEventListener("click", () => {
    completeList.remove();
    clearOpen = false;
    clearModalOpen.classList.remove("open");
  });

  clearNo.addEventListener("click", () => {
    clearOpen = false;

    clearModalOpen.classList.remove("open");
  });
});
