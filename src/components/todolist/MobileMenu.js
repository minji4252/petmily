const MobileMenu = ({
  mobileMenu,
  closeMobileMenu,
  clickSuccessList,
  clickTodoList,
}) => {
  const onClickBack = () => {
    mobileMenu.current.style.display = "none";
  };
  return (
    <div className="menubox" ref={mobileMenu} onClick={() => onClickBack()}>
      <div className="mb-menumodal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          className="close-menu"
          onClick={() => {
            closeMobileMenu();
          }}
        >
          <path
            d="M1.9 19L0 17.1L7.6 9.5L0 1.9L1.9 0L9.5 7.6L17.1 0L19 1.9L11.4 9.5L19 17.1L17.1 19L9.5 11.4L1.9 19Z"
            fill="black"
          />
        </svg>
        <div
          className="open-todolist"
          onClick={() => {
            clickTodoList();
          }}
        >
          오늘의 할 일
        </div>
        <div
          className="open-successlist"
          onClick={() => {
            clickSuccessList();
          }}
        >
          완료된 할 일
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MobileMenu;
