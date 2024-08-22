import React from "react";

const UserRow = ({ user, deleteEmployee, putEmployee }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={user.profileImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{user.firstname}</td>
      <td>
        <div className="badge badge-primary badge-outline">{user.position}</div>
      </td>
      <td>{user.email}</td>
      <td>
        <div className="">
          <button
            className="btn btn-outline btn-info btn-xs"
            onClick={() => {
              putEmployee(user.eid);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-outline btn-error btn-xs"
            onClick={() => {
              deleteEmployee(user.eid);
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
