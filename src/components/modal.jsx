import React, { useState } from "react";

const Modal = ({ isOpen, close, createEmployee }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    createEmployee({
      firstname,
      lastname,
      email,
      position,
      profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    });
  };
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">Hello!</h3>
        <div className="flex gap-4 flex-col">
          <input
            type="text"
            placeholder="Нэрээ оруулна уу"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Овгоо оруулна уу"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Имэйл ээ оруулна уу"
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <select
            className="select select-primary w-full max-w-xs"
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          >
            <option disabled selected>
              Мэргэжил ээ сонгоно уу
            </option>
            <option value={"developer"}>Хөгжүүлэгч</option>
            <option value={"accountant"}>Нягтлан</option>
            <option value={"manager"}>Менежер</option>
            <option value={"dataAnalyst"}>Дата аналист</option>
          </select>
        </div>
        <p className="py-4">Click the button below to close</p>
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
