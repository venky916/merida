import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/portfolio"); // make sure this route exists in your router config
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
