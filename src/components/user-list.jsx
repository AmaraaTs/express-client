import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHeader from "./user-header";

const UserList = () => {
  const [users, setUsers] = useState();
  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json(res);
    setUsers(users);
  };

  const createEmployee = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Amaraa",
        lastname: "God",
        email: "amaraaisgod@gmail.com",
        position: "Carry",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json(res);
    console.log("Add", user);
    setUsers([...users, user]);
  };

  const deleteEmployee = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    const { user } = await res.json(res);
    console.log("Delete", user);
    getEmployeesData();
  };

  useEffect(() => {
    getEmployeesData(), deleteEmployee();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <UserHeader />
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow user={user} deleteEmployee={deleteEmployee} />
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-info btn-outline" onClick={createEmployee}>
          Ажилтан нэмэх
        </button>
      </div>
    </div>
  );
};

export default UserList;
