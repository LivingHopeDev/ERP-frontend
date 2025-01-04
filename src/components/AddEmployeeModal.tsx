import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../utils/apiHelper";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  department: Yup.string().required("Department is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  role: Yup.string().required("Role is required"),
});

type AddEmployeeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddEmployeeModal = ({ isOpen, onClose }: AddEmployeeModalProps) => {
  const handleSubmit = async (formData: {
    name: string;
    department: string;
    email: string;
    role: string;
  }) => {
    try {
      const response = await api.post("/employees", formData);
      toast.success("Employee created successfully!");
      return response;
    } catch (error) {
      console.error("Error creating employee:", error);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
        <Formik
          initialValues={{
            name: "",
            department: "",
            email: "",
            role: "",
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
                <option value=" " disabled>
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
            <div className="flex justify-between">
              <button onClick={onClose} className="mr-2 text-red-500">
                Cancel
              </button>
              <button type="submit" className="border-2 p-2">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
