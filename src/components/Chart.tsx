import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import api from "../utils/apiHelper";
import { toast } from "react-toastify";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const AnalyticsChart: React.FC = () => {
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await api.get("dashboard/employees/count");
        const data = response.data.data;
        console.log(response);

        const labels = data.employeesPerDepartment.map(
          (item: { department: string }) => item.department
        );
        const counts = data.employeesPerDepartment.map(
          (item: { count: number }) => item.count
        );

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Headcount by Department",
              data: counts,
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Employee Headcount by Department",
      },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[80vw] h-[15rem] sm:h-[20rem]">
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};
