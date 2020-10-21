import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Halo ... <br />
      <Link to="/login">Login</Link> or <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Home;
