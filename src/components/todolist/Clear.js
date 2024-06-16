import { CancelButton, SubmitButton } from "../common/Button";

const Clear = ({ clearNo, clearYes, clearModalRef }) => {
  return (
    <div className="realdelete" ref={clearModalRef}>
      <span>모두 삭제</span>
      <div className="clear-button-box">
        <SubmitButton
          className="delete-button yes"
          onClick={clearYes}
          label="삭제하기"
        ></SubmitButton>
        <CancelButton
          className="delete-button no"
          onClick={clearNo}
          label="취소하기"
        ></CancelButton>
      </div>
    </div>
  );
};

export default Clear;
