import React, { useEffect, useState } from "react";
import UserRow from "./user-row";
import UserHeader from "./user-header";
import Modal from "./modal";
import { myFetch } from "@/util/functions";

const UserList = () => {
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [refetch, setRefetch] = useState(true);

  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  const createEmployee = async (newUser) => {
    await myFetch("http://localhost:8000/users/", "POST", newUser);
    hide();
    setRefetch(!refetch);
  };
  const updateEmployee = async (id, oldUser) => {
    await myFetch("http://localhost:8000/users/" + id, "PUT", oldUser);
    hide();
    setRefetch(!refetch);
  };
  // const deleteEmployee = async (id, oldUser) => {
  //   await myFetch(`http://localhost:8000/users/${id}`, "DELETE", oldUser);
  //   hide();
  //   setRefetch(!refetch);
  // };

  const deleteEmployee = async (id) => {
    const res = await fetch(`http://localhost:8000/users/${id}`, {
      method: "DELETE",
    });
    const { user } = await res.json(res);
    console.log("Delete", user);
    getEmployeesData();
  };

  // const putEmployee = async (id) => {
  //   console.log("UID", id);
  //   const res = await fetch(`http://localhost:8000/users/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       firstname: "Naruto",
  //       lastname: "Uzumaki",
  //       email: "narutoisnaruto@gmail.com",
  //       position: "Carry",
  //       profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  //     }),
  //   });
  //   const { user } = await res.json(res);
  //   console.log("Put", user);
  //   getEmployeesData();
  // };

  useEffect(() => {
    getEmployeesData();
  }, [refetch]);

  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const handleAdd = () => {
    setIsNew(() => true);
    show();
  };
  const handleEdit = (user) => {
    console.log("USER", user);
    setSelectedUser(user);
    setIsNew(() => false);
    show();
  };

  return (
    <div className="overflow-x-auto">
      <div>
        <button className="btn btn-info btn-outline mb-5" onClick={handleAdd}>
          Тоглогч нэмэх
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
              handleEdit={handleEdit}
              deleteEmployee={deleteEmployee}
            />
          ))}
        </tbody>
      </table>

      <Modal
        isNew={isNew}
        isOpen={isOpen}
        close={hide}
        createEmployee={createEmployee}
        updateEmployee={updateEmployee}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};

export default UserList;
