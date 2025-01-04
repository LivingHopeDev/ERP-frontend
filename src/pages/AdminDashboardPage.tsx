import { AnalyticsChart } from "../components/Chart";
import SidebarWrapper from "../components/SidebarWrapper";
export interface IEmployee {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  joiningDate: string;
  salary: number;
}

const AdminDashboard = () => {
  return (
    <SidebarWrapper role="admin">
      <div className="p-2 my-4">
        <div className="p-6 rounded-lg shadow-">
          <h2 className="text-3xl font-semibold mb-">Analytics</h2>
          <AnalyticsChart />
        </div>
      </div>
    </SidebarWrapper>
  );
};

export default AdminDashboard;
