import React, { useState } from "react";

const Modal = ({
  isNew,
  isOpen,
  close,
  createEmployee,
  updateEmployee,
  selectedUser,
  setSelectedUser,
}) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    if (isNew) {
      createEmployee({
        firstname,
        lastname,
        email,
        position,
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      });
    } else {
      updateEmployee(selectedUser.eid, selectedUser);
    }
    setFirstname("");
    setLastname("");
    setEmail("");
    setPosition("");
  };
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">{isNew ? "New" : "Edit"}</h3>
        <div className="flex gap-4 flex-col">
          <input
            type="text"
            placeholder="Нэрээ оруулна уу"
            className="input input-bordered input-primary w-full max-w-xs"
            value={isNew ? firstname : selectedUser.firstname}
            onChange={(e) => {
              if (isNew) {
                setFirstname(e.target.value);
              } else {
                setSelectedUser({ ...selectedUser, firstname: e.target.value });
              }
            }}
          />
          <input
            type="text"
            placeholder="Овгоо оруулна уу"
            className="input input-bordered input-primary w-full max-w-xs"
            value={isNew ? lastname : selectedUser.lastname}
            onChange={(e) => {
              if (isNew) {
                setLastname(e.target.value);
              } else {
                setSelectedUser({
                  ...selectedUser,
                  lastname: e.target.value,
                });
              }
            }}
          />
          <input
            type="email"
            placeholder="Имэйл ээ оруулна уу"
            className="input input-bordered input-primary w-full max-w-xs"
            value={isNew ? email : selectedUser.email}
            onChange={(e) => {
              if (isNew) {
                setEmail(e.target.value);
              } else {
                setSelectedUser({
                  ...selectedUser,
                  email: e.target.value,
                });
              }
            }}
          />
          <select
            className="select select-primary w-full max-w-xs"
            value={isNew ? position : selectedUser.position}
            onChange={(e) => {
              if (isNew) {
                setPosition(e.target.value);
              } else {
                setSelectedUser({
                  ...selectedUser,
                  position: e.target.value,
                });
              }
            }}
          >
            <option disabled selected>
              Role оо сонгоно уу
            </option>
            <option value={"Carry"}>Carry</option>
            <option value={"A copy carry"}>A copy carry</option>
            <option value={"Mid"}>Mid</option>
            <option value={"Offlane"}>Offlane</option>
            <option value={"Soft support"}>Soft support</option>
            <option value={"Hard support"}>Hard support</option>
            <option value={"Feeder"}>Feeder</option>
          </select>
        </div>
        {/* <p className="py-4">Click the button below to close</p> */}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn" onClick={handleSave}>
              Хадгалах
            </button>
            <button className="btn" onClick={close}>
              Хаах
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
