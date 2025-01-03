import { useState } from "react";
// import { useStore } from "../../store/useStore";
// import Button from "../components/Button";
import Table from "../components/Table";
import AddEmployeeModal from "../components/AddEmployeeModal";

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
];
const AdminDashboard = () => {
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
      />
      <AddEmployeeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AdminDashboard;

// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const AdminDashboard: React.FC = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       department: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//         .max(50, "Name must be 50 characters or less")
//         .required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       department: Yup.string().required("Department is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form Submitted:", values);
//       // Placeholder for form submission logic
//     },
//   });

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       {/* Add Employee Form */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Add Employee</h2>
//         <form onSubmit={formik.handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-gray-700"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               {...formik.getFieldProps("name")}
//               className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
//                 formik.touched.name && formik.errors.name
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//             />
//             {formik.touched.name && formik.errors.name ? (
//               <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
//             ) : null}
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-gray-700"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               {...formik.getFieldProps("email")}
//               className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
//                 formik.touched.email && formik.errors.email
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//             />
//             {formik.touched.email && formik.errors.email ? (
//               <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
//             ) : null}
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-sm font-medium text-gray-700"
//               htmlFor="department"
//             >
//               Department
//             </label>
//             <input
//               type="text"
//               id="department"
//               {...formik.getFieldProps("department")}
//               className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
//                 formik.touched.department && formik.errors.department
//                   ? "border-red-500"
//                   : "border-gray-300"
//               }`}
//             />
//             {formik.touched.department && formik.errors.department ? (
//               <p className="text-red-500 text-sm mt-1">
//                 {formik.errors.department}
//               </p>
//             ) : null}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
//           >
//             Add Employee
//           </button>
//         </form>
//       </div>

//       {/* Employee Table Placeholder */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Employee List</h2>
//         <table className="w-full table-auto border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border px-4 py-2 text-left">Name</th>
//               <th className="border px-4 py-2 text-left">Email</th>
//               <th className="border px-4 py-2 text-left">Department</th>
//               <th className="border px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Placeholder Rows */}
//             <tr>
//               <td className="border px-4 py-2">John Doe</td>
//               <td className="border px-4 py-2">john.doe@example.com</td>
//               <td className="border px-4 py-2">Engineering</td>
//               <td className="border px-4 py-2">
//                 <button className="text-blue-600 hover:underline mr-4">
//                   Edit
//                 </button>
//                 <button className="text-red-600 hover:underline">Delete</button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Analytics Chart Placeholder */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
//         <div className="h-64 flex items-center justify-center">
//           {/* Placeholder for Chart */}
//           <p className="text-gray-500">Chart coming soon...</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
