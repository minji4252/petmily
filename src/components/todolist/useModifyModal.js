import { useEffect, useRef, useState } from "react";

const useModifyModal = ({ todos }) => {
  const [modifyModalOpen, setModifyModalOpen] = useState(false);
  const modifyModalRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 clearModalOpen을 false로 설정
    setModifyModalOpen(false);
    if (
      modifyModalRef.current &&
      modifyModalRef.current.classList.contains("open")
    ) {
      modifyModalRef.current.classList.remove("open");
    }
  }, []);

  const openModifyModal = () => {
    setModifyModalOpen(true);
    if (modifyModalRef.current) {
      modifyModalRef.current.classList.toggle("open");
    }
  };

  const modifyNo = () => {
    setModifyModalOpen(false);
    if (modifyModalRef.current) {
      modifyModalRef.current.classList.remove("open");
    }
  };
  return {
    modifyModalOpen,
    openModifyModal,
    modifyModalRef,
    modifyNo,
  };
};

export default useModifyModal;
