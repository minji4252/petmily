import styled from "@emotion/styled";
import { colorSystem } from "../../styles/color";
import Calendar from "./Calendar";

const num = 100;

const SimpleModalStyle = styled.div`
  /* 임시 */
  position: absolute;
  left: ${num}px;
  top: ${num}px;

  /* 진짜 */
  width: 220px;
  height: 150px;
  border-radius: 20px;
  background-color: ${colorSystem.white};
  border: 3px solid ${colorSystem.signature2};
  padding-top: 10px;
`;

const ModalTitle = styled.span`
  font-size: 0.9rem;
  color: ${colorSystem.g500};
  font-weight: 600;
  margin-left: 10px;
`;

const ModalLine = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colorSystem.signature2};
  margin-top: 10px;
`;

const ModalList = styled.div``;
const ModalItem = styled.div`
  display: flex;
`;
const ModalBtn = styled.div``;

const SimpleModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  return (
    <SimpleModalStyle>
      <ModalTitle>05 수요일</ModalTitle>
      <ModalLine />
      <ModalList>
        <ModalItem>
          <p>10 : 20 루이 주사 맞기</p>
          <button>상세정보</button>
        </ModalItem>
      </ModalList>
      <ModalBtn>
        <button>추가</button>
        <button>수정</button>
        <button>삭제</button>
      </ModalBtn>
    </SimpleModalStyle>
  );
};

export default SimpleModal;
