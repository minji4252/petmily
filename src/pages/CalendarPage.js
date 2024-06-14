import { useEffect } from "react";
import Index from "../components/calendar/Index";
import { useNavigate } from "react-router-dom";

const CalendarPage = () => {
  const navigate = useNavigate();
  const logedid = sessionStorage.getItem("userPk");

  useEffect(() => {
    if (!logedid) {
      navigate("/login");
    } else {
      navigate("/calendar");
    }
  }, []);
  return (
    <div>
      <Index />
    </div>
  );
};

export default CalendarPage;
