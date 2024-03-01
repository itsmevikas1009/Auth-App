import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function HomePage({ user, setUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
    document.title = "Auth App";
  }, []);
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <div className="dark:text-white text-gray-900 text-5xl text-center my-20">
        Welcome to Our&nbsp;
        <h1
          id="animate"
          className="inline-block text-[#bfe1d4] dark:text-[#00df9a]"
        >
          <span>A</span>
          <span>U</span>
          <span>T</span>
          <span>H</span>
          <span>&nbsp;</span>
          <span>A</span>
          <span>P</span>
          <span>P</span>
        </h1>
        , <br />
        <br />
        <Link
          className="dark:text-gray-400 underline dark:hover:text-gray-600 p-3 text-white hover:text-gray-400"
          to="/login"
        >
          Login
        </Link>
        to get started!
      </div>
    </>
  );
}

export default HomePage;
