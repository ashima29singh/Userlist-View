import React, { useState } from "react";

const UserModal = ({
  isOpen,
  onClose,
  namee,
  username,
  address,
  email,
  phone,
  website,
  company,
}) => {
  const [name, setName] = useState(namee || "");
  const [userName, setUserName] = useState(username || "");
  const [addressValue, setAddressValue] = useState(address || "");
  const [emailValue, setEmailValue] = useState(email || "");
  const [phoneValue, setPhoneValue] = useState(phone || "");
  const [websiteValue, setwebsiteValue] = useState(website || "");
  const [companyValue, setcompanyValue] = useState(company || "");
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-xl w-full">
        <div>
          <h3 className="font-semibold pb-2">User Details</h3>
          <hr className="mb-5 border-black" />
          <div className="flex flex-wrap">
            <div className="mb-4 flex-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                value={name}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>

            <div className="mb-4 ml-3 flex-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="userName"
              >
                Username
              </label>
              <input
                type="text"
                value={userName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-4 flex-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="role"
              >
                Address
              </label>
              <textarea
                value={addressValue}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              ></textarea>
            </div>

            <div className="mb-4 ml-3 flex-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                value={emailValue}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-4 flex-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="text"
                value={phoneValue}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>

            <div className="mb-4 flex-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Website
              </label>
              <input
                type="text"
                value={websiteValue}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                readOnly
              />
            </div>
          </div>

          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Company
            </label>
            <input
              type="text"
              value={companyValue}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              readOnly
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
