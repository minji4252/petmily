import styled from "@emotion/styled";
import { CancelButton, SubmitButton } from "../common/Button";
import { colorSystem } from "../../styles/color";
import { ConfirmModalStyle } from "../common/ConfirmModal";
import { IoClose } from "react-icons/io5";
import { ModalBtn, ModalLine } from "../../styles/calendar/SimpleModalStyles";

const Clear = ({ clearNo, clearYes, clearModalRef }) => {
  return (
    <ConfirmModalStyle className="realdelete" ref={clearModalRef}>
      <button className="close-btn" type="button" onClick={clearNo}>
        <IoClose />
      </button>
      <ModalLine />
      <p>모두 삭제하시겠습니까?</p>
      <ModalBtn>
        <SubmitButton
          className="delete-button yes"
          onClick={clearYes}
          label="삭제"
        />
        <CancelButton
          className="delete-button no"
          onClick={clearNo}
          label="취소"
        />
      </ModalBtn>
    </ConfirmModalStyle>
  );
};

export default Clear;
