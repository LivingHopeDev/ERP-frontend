import React, { useState } from "react";
import ProfileModal from "../components/ProfileModal";
import { BiEdit } from "react-icons/bi";
import SidebarWrapper from "../components/SidebarWrapper";

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
    <SidebarWrapper role="employee">
      <div className="p-6 bg-gray-50 min-h-[50vh]">
        {/* Profile Header */}
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-40 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl font-bold">My Profile</h2>
              <p className="text-blue-200 text-lg">
                Welcome, {personalDetails.name}!
              </p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6">
            <div className="relative">
              {/* Edit Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="absolute top-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 shadow-md"
                title="Edit Profile"
              >
                <BiEdit className="text-xl" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <h4 className="text-gray-600 font-semibold">Name</h4>
                <p className="text-gray-800 text-lg">{personalDetails.name}</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Email</h4>
                <p className="text-gray-800 text-lg">{personalDetails.email}</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Department</h4>
                <p className="text-gray-800 text-lg">
                  {personalDetails.department}
                </p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Role</h4>
                <p className="text-gray-800 text-lg">{personalDetails.role}</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Salary</h4>
                <p className="text-gray-800 text-lg">
                  ${personalDetails.salary}
                </p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Joining Date</h4>
                <p className="text-gray-800 text-lg">
                  {personalDetails.joiningDate}
                </p>
              </div>
            </div>
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
    </SidebarWrapper>
  );
};

export default Profile;
