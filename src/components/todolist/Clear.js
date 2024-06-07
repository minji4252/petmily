const Clear = ({ clearNo, clearYes, clearModalRef }) => {
  return (
    <div className="realdelete" ref={clearModalRef}>
      <span>정말 모두 삭제 하시겠습니까?</span>
      <button className="delete-button yes" onClick={clearYes}>
        <p>확인</p>
      </button>
      <button className="delete-button no" onClick={clearNo}>
        <p>취소</p>
      </button>
    </div>
  );
};

export default Clear;
