import { AnalyticsChart } from "../components/Chart";
import Sidebar from "../components/Sidebar";
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
const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="admin" />

      <div className="flex-1 p-2 mt-10 ">
        {/* <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1> */}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Analytics</h2>
          <AnalyticsChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
