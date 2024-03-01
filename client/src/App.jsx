import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";
import HomePage from "./HomePage.jsx";

function App() {
  const info = localStorage.getItem("user");
  const [user, setUser] = useState(JSON.parse(info));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage user={user} setUser={setUser} />,
    },
    {
      path: "/dashboard",
      element: <Dashboard user={user} setUser={setUser} />,
    },
    {
      path: "/signup",
      element: <SignUp user={user} setUser={setUser} />,
    },
    {
      path: "/login",
      element: <Login user={user} setUser={setUser} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
