import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboardPage";
import EmployeeList from "./pages/EmployeeList";
import { AnalyticsChart } from "./components/Chart";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/employee" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};

export default App;
