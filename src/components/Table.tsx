import React, { useState } from "react";
import { IEmployee } from "../pages/AdminDashboardPage";

type TableProps = {
  data: IEmployee[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  totalPages: number;
  currentPage: number;
  setCurrentPage: any;
};

const Table = ({
  data,
  onEdit,
  onDelete,
  totalPages,
  currentPage,
  setCurrentPage,
}: TableProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Department</th>
            <th className="border px-4 py-2 text-left">Role</th>
            <th className="border px-4 py-2 text-left">Joining date</th>
            <th className="border px-4 py-2 text-left">Salary</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.email}</td>
              <td className="border px-4 py-2">{employee.department}</td>
              <td className="border px-4 py-2">{employee.role}</td>
              <td className="border px-4 py-2">{employee.joiningDate}</td>
              <td className="border px-4 py-2">$ {employee.salary}</td>
              <td className="border px-4 py-2">
                <button
                  className="text-blue-600 hover:underline mr-4"
                  onClick={() => onEdit(employee.id)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
          onClick={() => setCurrentPage((prev: any) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700 mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
          onClick={() => setCurrentPage((prev: any) => Math.min(prev - 1, 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
