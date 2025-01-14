import SidebarWrapper from "../components/SidebarWrapper";
import Table from "../components/Table";
import AddEmployeeModal from "../components/AddEmployeeModal";
import { useEffect, useState } from "react";
import api from "../utils/apiHelper";
import { toast } from "react-toastify";

export interface IEmployee {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  joiningDate: string;
  salary: number;
}

const EmployeeList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [employees, setEmployees] = useState<IEmployee[]>([]); // Fix: Define type as IEmployee[]
  const [loading, setLoading] = useState(false);
  const handleAddEmployee = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const itemsPerPage = 10;
  const fetchEmployee = async (page: number, limit: number) => {
    try {
      setLoading(true);
      const response = await api.get(`employee?page=${page}&limit=${limit}`);
      const { data: employees, totalPages } = response.data;

      setEmployees(employees);
      setTotalPages(totalPages);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (employeeId: string) => {
    try {
      await api.delete(`employee/${employeeId}`);

      toast.success("Deleted successfully");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchEmployee(currentPage, itemsPerPage);
  }, []);
  return (
    <SidebarWrapper role="admin">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
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
              onDelete={handleDelete}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <AddEmployeeModal isOpen={isModalOpen} onClose={closeModal} />
        </>
      )}
    </SidebarWrapper>
  );
};

export default EmployeeList;
