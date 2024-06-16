import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PetAdmin from "../components/petadmin/PetAdmin";

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
