import { useEffect, useState } from "react";

const useClearModal = () => {
  const [clearModalOpen, setClearModalOpen] = useState(false);
  const clearModalOpene = document.querySelector(".realdelete");
  const completeList = document.querySelectorAll(".todo-left-detail");

  const openClearModal = () => {
    setClearModalOpen(true);
    clearModalOpene.classList.toggle("open");
  };

  const clearYes = () => {
    setClearModalOpen(false);
    clearModalOpene.classList.remove("open");
  };

  const clearNo = () => {
    setClearModalOpen(false);
    clearModalOpene.classList.remove("open");
  };

  return { clearModalOpen, openClearModal, clearYes, clearNo };
};

export default useClearModal;
