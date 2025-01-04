import React, { useState } from "react";
import ProfileModal from "../components/ProfileModal";
import { BiEdit } from "react-icons/bi";
import Sidebar from "../components/Sidebar";
export interface IProfileDetails {
  name: string;
  email: string;
  department: string;
  joiningDate: string;
  role: string;
  salary: number;
}
const personalDetails = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  department: "Marketing",
  joiningDate: "2025-01-02",
  role: "Employee",
  salary: 200,
};

const Profile: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="flex">
      <Sidebar role="employee" />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <div className="flex justify-between relative ">
            <ul className="text-gray-700">
              <li className="mb-2">
                <strong>Name:</strong> {personalDetails.name}
              </li>
              <li className="mb-2">
                <strong>Email:</strong> {personalDetails.email}
              </li>
              <li className="mb-2">
                <strong>Department:</strong> {personalDetails.department}
              </li>
              <li className="mb-2">
                <strong>Role:</strong> {personalDetails.role}
              </li>
              <li className="mb-2">
                <strong>Salary:</strong> {personalDetails.salary}
              </li>
              <li className="mb-2">
                <strong>Joined Date:</strong> {personalDetails.joiningDate}
              </li>
            </ul>
            <button
              className="absolute left-[20rem]"
              onClick={() => setModalOpen(true)}
            >
              <BiEdit />
            </button>
          </div>
        </div>
        {isModalOpen && (
          <ProfileModal
            personalDetails={personalDetails}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
