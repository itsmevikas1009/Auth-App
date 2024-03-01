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
    <div className="flex flex-col gap-5 items-center max-h-screen sm:w-11/12 w-2/5 mx-auto  py-[3rem] text-white">
      <h1 className="text-2xl font-bold pb-6">Admin Dashboard</h1>
      {userList.map((item) => (
        <div
          key={item._id}
          className="w-full flex items-center justify-between py-2 rounded-md px-4 border border-gray-400"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl ">
              {item.firstName} {item?.lastName}
            </h2>
            <h2 className="text-sm italic text-gray-400"> ~ {item.email}</h2>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {/* <button
              onClick={() => declineHandler(item._id)}
              className=" bg-red-500 text-richblack-700 font-semibold text-lg  py-[1px] px-3 min:px-1 rounded-md "
            >
              Decline
            </button> */}
            <button
              onClick={() => submitHandler(item._id)}
              className=" bg-gray-400 text-gray-900 font-semibold text-lg  py-[1px] px-3 min:px-1  rounded-md "
            >
              Verify
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
