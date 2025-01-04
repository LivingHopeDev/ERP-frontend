import React, { useState } from "react";
import { Field, ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import useAuthStore from "../store/auth-store";
import api from "../utils/apiHelper";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage: React.FC = () => {
  const login = useAuthStore((state) => state.login);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (formData: { password: string; email: string }) => {
    try {
      setLoading(true);
      const response = await api.post("auth/login", formData);
      const { token, user } = response.data;
      const role = user.role;
      login(token, role);

      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "employee") {
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            handleLogin(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col gap-4">
                {loading ? (
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    loading...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                    // disabled={isSubmitting}
                  >
                    Login
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
