import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHeader from "./user-header";
import Modal from "./modal";

const UserList = () => {
  const [users, setUsers] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json(res);
    setUsers(users);
  };

  const createEmployee = async (newUser) => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const { user } = await res.json(res);
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

  const putEmployee = async (id) => {
    console.log("UID", id);
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Naruto",
        lastname: "Uzumaki",
        email: "narutoisnaruto@gmail.com",
        position: "Carry",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json(res);
    console.log("Put", user);
    getEmployeesData();
  };

  useEffect(() => {
    getEmployeesData();
  }, []);

  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const handleAdd = () => {
    show();
  };
  return (
    <div className="overflow-x-auto">
      <div>
        <button className="btn btn-info btn-outline" onClick={handleAdd}>
          Ажилтан нэмэх
        </button>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <UserHeader />
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow
              user={user}
              deleteEmployee={deleteEmployee}
              putEmployee={putEmployee}
            />
          ))}
        </tbody>
      </table>

      <Modal isOpen={isOpen} close={hide} createEmployee={createEmployee} />
    </div>
  );
};

export default UserList;
