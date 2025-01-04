import SidebarWrapper from "../components/SidebarWrapper";
import Table from "../components/Table";
import AddEmployeeModal from "../components/AddEmployeeModal";
import { useState } from "react";

export interface IEmployee {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  joiningDate: string;
  salary: number;
}
const employees: IEmployee[] = [
  // Dummy data
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@mail.com",
    department: "HR",
    role: "Admin",
    joiningDate: "2024-01-10",
    salary: 3000,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@mail.com",
    department: "Finance",
    role: "Employee",
    joiningDate: "2023-03-15",
    salary: 2500,
  },
];

const EmployeeList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleAddEmployee = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <SidebarWrapper role="admin">
      <div className="flex justify-end p-2">
        <button
          onClick={handleAddEmployee}
          className="border-2 p-2 rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Add Employee
        </button>
      </div>
      <div className="rounded-lg border shadow-md max-w-[24rem] md:max-w-4xl lg:max-w-5xl ">
        <Table
          data={employees}
          onEdit={() => {}}
          onDelete={() => {}}
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <AddEmployeeModal isOpen={isModalOpen} onClose={closeModal} />
    </SidebarWrapper>
  );
};

export default EmployeeList;
