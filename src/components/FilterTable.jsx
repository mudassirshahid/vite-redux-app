import React, { useState, useMemo } from "react";
import usersData from "../data";
import { useDebounce } from "../useDebounce"; // adjust path if needed

const Table = () => {
  const [search, setSearch] = useState("");

  // Use custom hook (500ms debounce)
  const debouncedSearch = useDebounce(search, 500);

  // Filter data using debounced search
  const filteredUsers = useMemo(() => {
    return usersData.filter((user) => {
      const searchTerm = debouncedSearch.toLowerCase();
      return (
        user.firstName.toLowerCase().includes(searchTerm) ||
        user.lastName.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.phone.toLowerCase().includes(searchTerm)
      );
    });
  }, [debouncedSearch]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users Table</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-4"
      />

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-400 px-4 py-2">ID</th>
              <th className="border border-gray-400 px-4 py-2">First Name</th>
              <th className="border border-gray-400 px-4 py-2">Last Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-600">
                  <td className="border border-gray-400 px-4 py-2 text-center">{user.id}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.firstName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.lastName}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-400 px-4 py-2">{user.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
