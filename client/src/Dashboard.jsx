import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import { useNavigate } from "react-router-dom";
import Animation from "./components/Animation.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";

function Dashboard({ user, setUser }) {
  const navigate = useNavigate();

  // Fetching the list of tasks on page load
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    document.title = "Auth App - Home";
  }, []);
  if (user) {
    if (user.accountType === "Admin") {
      return (
        <>
          <NavBar user={user} setUser={setUser} />
          <div className="pt-16">
            <AdminDashboard />
          </div>
        </>
      );
    } else if (user.accountType === "User") {
      return (
        <>
          <NavBar user={user} setUser={setUser} />
          <div className="pt-16">
            <div className="lg:flex lg:justify-center lg:items-center text-center lg:pt-16">
              <div>
                <div className="">
                  <h1 className="sm:text-4xl sm:m-5 sm:mt-0 mt-4 text-2xl dark:text-white text-gray-900">
                    Hello{" "}
                    <span className="text-[#bfe1d4] dark:text-[#00df9a]">
                      {user.firstName},
                    </span>{" "}
                    Welcome to
                  </h1>
                </div>
                <Animation />
              </div>
            </div>
          </div>
        </>
      );
    }
  } else {
    return null;
  }
  // return (
  //   <>
  //     <NavBar user={user} setUser={setUser} />
  //     <div className="pt-16">
  //       {user ? (
  //         user.accountType === "Admin" ? (
  //           <AdminDashboard />
  //         ) : user.accountType === "User" ? (
  //           <div className="lg:flex lg:justify-center lg:items-center text-center lg:pt-16">
  //             <div>
  //               <div className="">
  //                 <h1 className="sm:text-4xl sm:m-5 sm:mt-0 mt-4 text-2xl dark:text-white text-gray-900">
  //                   Hello{" "}
  //                   <span className="text-[#bfe1d4] dark:text-[#00df9a]">
  //                     {user.firstName},
  //                   </span>{" "}
  //                   Welcome to
  //                 </h1>
  //               </div>
  //               <Animation />
  //             </div>
  //           </div>
  //         ) : (
  //           window.location.reload()
  //         )
  //       ) : (
  //         window.location.reload()
  //       )}
  //     </div>
  //   </>
  // );
}

export default Dashboard;
