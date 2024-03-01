import React, { useEffect, useState } from "react";
import { approveUser, getUserDetails } from "../service/ApiCall.jsx";

function AdminDashboard() {
  const [userList, setUserList] = useState([]);

  const fetchUserData = async () => {
    const res = await getUserDetails();
    setUserList(res.data.userList);
  };

  const submitHandler = async (userId) => {
    try {
      const res = await approveUser({ userId });
      if (res.data.status === 200) {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [userList]);
  return (
    <div className="flex flex-col gap-5 items-center max-h-screen  w-2/5 min-w-[230px] mx-auto py-[3rem] text-richblack-5">
      <h1 className="text-2xl font-bold pb-6 text-white">Admin Dashboard</h1>
      {userList.map((item) => (
        <div
          key={item._id}
          className="w-full flex items-center justify-between text-richblack-5 bg-richblack-700 py-2 rounded-md px-4 border border-gray-400"
        >
          <h2 className="text-xl text-white">
            {item.firstName} {item?.lastName}
          </h2>
          <h4 className="text-sm">{item.email}</h4>
          <button
            onClick={() => submitHandler(item._id)}
            className=" bg-gray-400 text-gray-900 font-semibold text-lg  py-[1px] px-3 rounded-md "
          >
            Verify
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
