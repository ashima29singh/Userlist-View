import React, { useState, useEffect } from "react";
import UserItem from "./UserItem";
import UserModal from "./ViewUserModal";

export default function UserList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        let data = await response.json();
        setUsers(data);
        setuserdata(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const addressModifier = (address) => {
    return (
      address.street +
      ", " +
      address.suite +
      ", " +
      address.city +
      ", " +
      address.zipcode
    );
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    if (searchQuery === "") {
      setUsers(userdata);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
    if (searchQuery === "") {
      setUsers(userdata);
    } else {
      let filteredUsers = userdata.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setUsers(filteredUsers);
    }
  };

  return (
    <div className="row px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold">User Management</h1>
        <h3 className="text-gray-500">
          Manage your team members and account here.
        </h3>
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
        {loading && (
          <div className="w-12 flex flex-wrap justify-center h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        )}
        {error && (
          <h3 className="font-semibold">Error occured during the API call</h3>
        )}
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex justify-between items-center p-4 pl-0">
          <div>
            <span className="text-l font-bold ">All Users </span>
            <span className="text-l text-gray-500">{users.length}</span>
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            onClick={handleSearch}
            type="submit"
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition ml-3"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 font-bold gap-4 mt-8 mb-4 ">
        <h1 className="col-span-3">Name</h1>
        <h1 className="col-span-2">Username</h1>
        <h1 className="col-span-4">Address</h1>
        <h1 className="col-span-2">Phone</h1>
      </div>
      <hr className="border border-gray-200"></hr>

      {users.map((element) => {
        return (
          <div className="col-md-4" key={element.username}>
            <UserItem
              name={element.name}
              username={element.username}
              email={element.email}
              address={addressModifier(element.address)}
              phone={element.phone}
              website={element.website}
              company={element.company.name}
            />
          </div>
        );
      })}
    </div>
  );
}
