import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isData } from "../store";

const Dashboard = () => {
  const setData = useSetRecoilState(isData);
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  return (
    <div>
      <h1>Ahlan Wa Sahlan {user}</h1>

      <button
        onClick={() => {
          setData(false);
          localStorage.removeItem("isData");
          localStorage.removeItem("user");
          navigate("/");
        }}
      >
        Keluar
      </button>
    </div>
  );
};

export default Dashboard;
