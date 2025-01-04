import React, { useEffect, useState } from "react";
import ProfileModal from "../components/ProfileModal";
import { BiEdit } from "react-icons/bi";
import SidebarWrapper from "../components/SidebarWrapper";
import api from "../utils/apiHelper";
import { toast } from "react-toastify";
export interface IEmployeeResponse {
  id: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  employeeId: string;
  employee: {
    id: string;
    name: string;
    email: string;
    department: string;
    salary: number;
    joiningDate: string;
    createdAt: string;
    updatedAt: string;
  };
}

const Profile: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const [profile, setProfile] = useState<IEmployeeResponse | null>(null);
  const fetchProfile = async () => {
    try {
      const response = await api.get("profile");
      setProfile(response.data.data);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  const user = profile?.employee;

  return (
    <SidebarWrapper role="employee">
      <div className="p-6 bg-gray-50 min-h-[50vh]">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-40 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl font-bold">My Profile</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="relative">
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
                <p className="text-gray-800 text-lg">{user?.name}</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Email</h4>
                <p className="text-gray-800 text-lg">{user?.email}</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Department</h4>
                <p className="text-gray-800 text-lg">{user?.department}</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Role</h4>
                <p className="text-gray-800 text-lg">{profile?.role}</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Salary</h4>
                <p className="text-gray-800 text-lg">${user?.salary}</p>
              </div>
              <div>
                <h4 className="text-gray-600 font-semibold">Joining Date</h4>
                <p className="text-gray-800 text-lg">
                  {user?.joiningDate
                    ? new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }).format(new Date(user.joiningDate))
                    : "No joining date"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <ProfileModal
            profile={profile}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        )}
      </div>
    </SidebarWrapper>
  );
};

export default Profile;
