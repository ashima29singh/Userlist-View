import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiSettings, FiShield, FiLogOut } from "react-icons/fi";

function App() {
  return (
    <>
      <Router>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 border flex-shrink-0">
            <div className="p-4 text-2xl font-bold border-b border-gray-300">
              Assignment
            </div>
            <nav className="mt-4">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center">
                  <FiHome className="mr-3 text-lg" />
                  <span>Dashboard</span>
                </li>
                <Link to="/">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center">
                    <FiUser className="mr-3 text-lg" />
                    <span>User Management</span>
                  </li>
                </Link>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center">
                  <FiLogOut className="mr-3 text-lg" />
                  <span>Logout</span>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<UserList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
