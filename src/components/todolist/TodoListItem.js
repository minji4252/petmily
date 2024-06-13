const TodoListItem = ({ todo, onRemove, onToggle, openModifyModal }) => {
  const { listId, content, isCompleted } = todo;
  return (
    <div className="to-do-list">
      {!isCompleted ? (
        <div className="todo-right-box">
          <div className="todo-right-detail-left">
            {!isCompleted ? (
              <svg
                onClick={() => onToggle(listId)}
                type="checkbox"
                id="checkbox"
                className="todo-right-detail-left-icon-empty"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 25 26"
                fill="none"
              >
                <circle
                  cx="12.5"
                  cy="13"
                  r="11.5"
                  stroke="#CBB1A2"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                onClick={() => onToggle(listId)}
                type="checkbox"
                id="checkbox"
                className="todo-right-detail-left-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 25 26"
                fill="none"
              >
                <circle
                  cx="12.5"
                  cy="13"
                  r="11.5"
                  stroke="#CBB1A2"
                  strokeWidth="2"
                />
                <path
                  d="M12.5 0.5C5.59648 0.5 0 6.09648 0 13C0 19.9039 5.59648 25.5 12.5 25.5C19.4039 25.5 25 19.9039 25 13C25 6.09648 19.4039 0.5 12.5 0.5ZM12.5 23.9621C6.46914 23.9621 1.5625 19.0309 1.5625 13C1.5625 6.96909 6.46914 2.06245 12.5 2.06245C18.5309 2.06245 23.4375 6.96912 23.4375 13C23.4375 19.0308 18.5309 23.9621 12.5 23.9621ZM17.4887 8.42617L10.1547 15.8062L6.85193 12.5035C6.54685 12.1984 6.05232 12.1984 5.74685 12.5035C5.44177 12.8086 5.44177 13.3031 5.74685 13.6082L9.61365 17.4754C9.91873 17.7801 10.4133 17.7801 10.7187 17.4754C10.7539 17.4402 10.784 17.4019 10.8113 17.3621L18.5941 9.53123C18.8988 9.22615 18.8988 8.73162 18.5941 8.42617C18.2887 8.12109 17.7941 8.12109 17.4887 8.42617Z"
                  fill="#CBB1A2"
                />
              </svg>
            )}

            {!isCompleted ? (
              <span
                className="todo-right-detail-text"
                style={{ wordBreak: "break-all" }}
              >
                {content}
              </span>
            ) : (
              <span
                className="todo-right-detail-text"
                style={{ textDecoration: "line-through" }}
              >
                {content}
              </span>
            )}
          </div>

          <div className="todo-right-detail-right">
            <svg
              className="todo-right-detail-right-modify"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 28 26"
              fill="none"
              onClick={() => {
                openModifyModal();
              }}
            >
              <path
                d="M17.5 6.5L21 9.75M15.1667 21.6667H24.5M5.83335 17.3333L4.66669 21.6667L9.33335 20.5833L22.8504 8.03183C23.2878 7.62552 23.5335 7.07452 23.5335 6.5C23.5335 5.92548 23.2878 5.37447 22.8504 4.96816L22.6497 4.78183C22.2121 4.37564 21.6187 4.14746 21 4.14746C20.3813 4.14746 19.7879 4.37564 19.3504 4.78183L5.83335 17.3333Z"
                stroke="#98715F"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              onClick={() => onRemove(listId)}
              className="todo-right-detail-right-delete"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 15 16"
              fill="none"
            >
              <path
                d="M14.8164 14.501C14.8731 14.5538 14.9185 14.6175 14.9501 14.6883C14.9816 14.759 14.9985 14.8354 14.9999 14.9129C15.0013 14.9904 14.987 15.0673 14.958 15.1391C14.929 15.211 14.8858 15.2762 14.831 15.331C14.7762 15.3858 14.711 15.429 14.6391 15.458C14.5673 15.487 14.4904 15.5013 14.4129 15.4999C14.3354 15.4985 14.259 15.4816 14.1883 15.4501C14.1175 15.4185 14.0538 15.3731 14.001 15.3164L7.48561 8.80196L0.970225 15.3164C0.860859 15.4183 0.716208 15.4738 0.566746 15.4711C0.417283 15.4685 0.274679 15.4079 0.168977 15.3022C0.0632745 15.1965 0.00272697 15.0539 8.98826e-05 14.9045C-0.00254721 14.755 0.052932 14.6104 0.15484 14.501L6.66926 7.98561L0.15484 1.47022C0.052932 1.36086 -0.00254721 1.21621 8.98826e-05 1.06675C0.00272697 0.917283 0.0632745 0.774679 0.168977 0.668977C0.274679 0.563274 0.417283 0.502727 0.566746 0.50009C0.716208 0.497453 0.860859 0.552932 0.970225 0.65484L7.48561 7.16926L14.001 0.65484C14.1104 0.552932 14.255 0.497453 14.4045 0.50009C14.5539 0.502727 14.6965 0.563274 14.8022 0.668977C14.9079 0.774679 14.9685 0.917283 14.9711 1.06675C14.9738 1.21621 14.9183 1.36086 14.8164 1.47022L8.30196 7.98561L14.8164 14.501Z"
                fill="#98715F"
              />
            </svg>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TodoListItem;
