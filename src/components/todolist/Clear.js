const Clear = ({ clearNo, clearYes, onRemoveAll }) => {
  return (
    <div className="realdelete">
      <p>정말 삭제 하시겠습니까?</p>
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
