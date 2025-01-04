import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../utils/apiHelper";
type ProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
  profile: any;
};
const ProfileModal = ({ isOpen, onClose, profile }: ProfileModalProps) => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(50, "Name must be 50 characters or less")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    department: Yup.string().required("Department is required"),
    joiningDate: Yup.string().required("Date is required"),
  });

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    department: string;
    joiningDate: string;
  }) => {
    try {
      setLoading(true);
      const response = await api.patch("profile", formData);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      onClose();
    }
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <div className="flex justify-end cursor-pointer">
          <IoCloseOutline className="w-5 h-5" onClick={onClose} />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
        <Formik
          initialValues={{
            name: profile?.employee.name || "",
            email: profile?.employee.email || "",
            department: profile?.employee.department || "",
            joiningDate:
              new Date(profile?.employee.joiningDate).toLocaleDateString() ||
              "",
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
                Joined Date
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
            {loading ? (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Please wait...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Update Profile
              </button>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ProfileModal;
