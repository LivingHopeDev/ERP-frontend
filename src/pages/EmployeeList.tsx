import { useState } from "react";
// import { useStore } from "../../store/useStore";
// import Button from "../components/Button";
import Table from "../components/Table";
import AddEmployeeModal from "../components/AddEmployeeModal";
import { AnalyticsChart } from "../components/Chart";

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
  {
    id: "1",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "2",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
  {
    id: "3",
    name: "shun",
    email: "shun@mail.com",
    department: "engineering",
    role: "employee",
    joiningDate: "2024-05-12",
    salary: 200,
  },
];
const EmployeeList = () => {
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  //   const { employees, deleteEmployee, setSelectedEmployee } = useStore();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddEmployee = () => {
    setModalOpen(true);
  };

  const handleEditEmployee = (id: string) => {
    // const employee = employees.find((emp) => emp.id === id);
    // if (employee) {
    //   setSelectedEmployee(employee);
    // }
  };

  const handleDeleteEmployee = (id: string) => {
    // deleteEmployee(id);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="flex justify-end p-2 ">
        <button
          onClick={handleAddEmployee}
          className="border-2 p-2 rounded-md "
        >
          Add Employee
        </button>
      </div>
      <Table
        data={employees}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
        totalPages={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <AddEmployeeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default EmployeeList;
