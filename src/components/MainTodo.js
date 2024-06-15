import { Link } from "react-router-dom";
import "../styles/common.css";
import "../styles/main.css";
import "../styles/reset.css";
import "../../src/styles/TodoList/left.css";
import { useEffect, useState } from "react";
import { getUpcoming } from "../api/apimain";
import Calendar from "react-calendar";

function MainTodo() {
  const [upcomingItems, setUpcomingItems] = useState([]);

  useEffect(() => {
    const fetchUpcomingItems = async () => {
      try {
        const data = await getUpcoming();
        console.log(data);
        setUpcomingItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUpcomingItems();
  }, []);

  return (
    <section className="main-sec-2">
      <div className="main-sec-2-inner">
        <div className="main-calendar-box">
          <div className="m-r-calendar">
            <Link to="/calendar" className="mrc-side-l">
              이번달 스케줄
            </Link>
            <span>
              <Link to="/calendar" className="mrc-side">
                자세히 보기
              </Link>
            </span>
          </div>

          <div className="main-calendar-sync">
            <Calendar />
          </div>
        </div>

        <div className="main-todo-box">
          <div className="m-r-todo">
            <Link to="/todolist" className="mrc-side-l">
              다가오는 일정
            </Link>
            <span>
              <Link to="/todolist" className="mrc-side">
                더보기
              </Link>
            </span>
          </div>
          <div className="main-todo-sync">
            <div className="main-todolist">
              {upcomingItems.length > 0 ? (
                upcomingItems.map((item, index) => (
                  <div key={index} className="main-t-item">
                    {item}
                  </div>
                ))
              ) : (
                <div className="main-t-item">다가오는 일정이 없습니다.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainTodo;
