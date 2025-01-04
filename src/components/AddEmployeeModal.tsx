import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../utils/apiHelper";
import { toast } from "react-toastify";
import { useState } from "react";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  department: Yup.string().required("Department is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  role: Yup.string().required("Role is required"),
  salary: Yup.number().positive().required("Salary is required"),
  joiningDate: Yup.string().required("Date is required"),
});

type AddEmployeeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddEmployeeModal = ({ isOpen, onClose }: AddEmployeeModalProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: {
    name: string;
    department: string;
    email: string;
    role: string;
    salary: string;
    joiningDate: string;
  }) => {
    try {
      setLoading(true);
      const response = await api.post("employee", formData);
      toast.success("Employee created successfully!");
      return response;
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);

      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-96 max-h-[90vh] overflow-y-scroll scrollbar-none">
        <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
        <Formik
          initialValues={{
            name: "",
            department: "",
            email: "",
            role: "",
            salary: "",
            joiningDate: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <Field
                type="text"
                name="department"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none"
              />
              <ErrorMessage
                name="department"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <Field
                as="select"
                name="role"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none"
              >
                <option value="" disabled>
                  Select role
                </option>
                <option value="employee">Employee</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Salary
              </label>
              <Field
                type="number"
                name="salary"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none"
              />
              <ErrorMessage
                name="salary"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Joining Date
              </label>
              <Field
                type="date"
                name="joiningDate"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md outline-none"
              />
              <ErrorMessage
                name="joiningDate"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 text-red-500"
              >
                Cancel
              </button>

              {loading ? (
                <button
                  type="submit"
                  className="border-2 p-2 bg-blue-600 rounded-md text-white"
                >
                  Please wait...
                </button>
              ) : (
                <button
                  type="submit"
                  className="border-2 p-2 bg-blue-600 rounded-md text-white"
                >
                  Submit
                </button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
