import "../styles/main.css";
import "../styles/common.css";
import "../styles/reset.css";

function MainTodo() {
  return (
    <section className="main-sec-2">
      <div className="main-sec-2-inner">
        <div className="main-calendar-box">
          <div className="m-r-calendar">
            <a href="#" className="mrc-side-l">
              이번달 스케줄
            </a>
            <span>
              <a href="#" className="mrc-side">
                자세히 보기
              </a>
            </span>
          </div>
          <div className="main-calendar-sync"></div>
        </div>

        <div className="main-todo-box">
          <div className="m-r-todo">
            <a href="#" className="mrc-side-l">
              다가오는 일정
            </a>
            <span>
              <a href="#" className="mrc-side">
                더보기
              </a>
            </span>
          </div>
          <div className="main-todo-sync"></div>
        </div>
      </div>
    </section>
  );
}

export default MainTodo;
