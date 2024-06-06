import { useEffect, useRef, useState } from "react";

const useModifyModal = (todos, setTodos) => {
  const [clearModalOpen, setClearModalOpen] = useState(false);
  const clearModalRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 clearModalOpen을 false로 설정
    setClearModalOpen(false);
    if (
      clearModalRef.current &&
      clearModalRef.current.classList.contains("open")
    ) {
      clearModalRef.current.classList.remove("open");
    }
  }, []);
  return;
};

export default useModifyModal;
