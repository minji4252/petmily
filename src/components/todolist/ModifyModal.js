const ModifyModal = ({
  modifyModalRef,
  modifyYes,
  modifyNo,
  modifyInsert,
  modifyValue,
}) => {
  return (
    <div className="modifybox" ref={modifyModalRef}>
      <form className="todo-right-create-box">
        <input
          className="todo-right-create-input"
          placeholder="할 일을 입력하세요."
          value={modifyValue}
          onChange={modifyInsert()}
        />
      </form>
      <button className="delete-button yes" onClick={modifyYes}>
        <p>수정</p>
      </button>
      <button className="delete-button no" onClick={modifyNo}>
        <p>취소</p>
      </button>
    </div>
  );
};

export default ModifyModal;
