import React, { useState } from "react";
import { FaEllipsisVertical } from "react-icons/fa6";
import UserModal from "./ViewUserModal";

const UserItem = (props) => {
  let { name, username, email, phone, address, website, company } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-4 mb-4 items-center">
        <div className="col-span-3 flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&s"
          />
          <div className="ml-5">
            <h1 className="font-bold">{name}</h1>
            <h1 className="text-gray-500">{email}</h1>
          </div>
        </div>

        <h1 className="col-span-2 text-gray-500">{username}</h1>

        <div className="col-span-4">
          <div
            className={`inline-flex items-center px-4 py-1 text-sm rounded-full`}
          >
            {address}
          </div>
        </div>
        <h1 className="col-span-2 text-gray-500">{phone}</h1>

        <div
          className="col-span-1 p-0 rounded hover:bg-gray-100 relative"
          onClick={toggleDropdown}
        >
          {/* Icon Button */}
          <button className="p-2 rounded hover:bg-gray-100">
            <FaEllipsisVertical className="text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-10">
              <ul className="py-1">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  View
                </li>
              </ul>
            </div>
          )}
        </div>

        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          namee={name}
          username={username}
          email={email}
          address={address}
          phone={phone}
          website={website}
          company={company}
        ></UserModal>
      </div>
      <hr className="border border-gray-200"></hr>
    </>
  );
};

export default UserItem;
