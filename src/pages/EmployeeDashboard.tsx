import Sidebar from "../components/Sidebar";

const EmployeeDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="employee" />
      <div className="flex-1 text-3xl mt-10 p-10">Welcome Username </div>
    </div>
  );
};

export default EmployeeDashboard;
