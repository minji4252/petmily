import { useNavigate } from "react-router-dom";
import PetAdmin from "../components/calendar/PetAdmin";
import { useEffect } from "react";

const PetAdminPage = () => {
  const navigate = useNavigate();
  const logedid = sessionStorage.getItem("userPk");

  useEffect(() => {
    if (!logedid) {
      navigate("/login");
    } else {
      navigate("/petadmin");
    }
  }, []);
  return (
    <>
      <PetAdmin />
    </>
  );
};

export default PetAdminPage;
