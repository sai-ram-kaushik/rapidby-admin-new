import { useMutation } from "@tanstack/react-query";
import React, { useContext } from "react";
import { loginAdmin } from "../api/postApi/postApi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
   const navigate = useNavigate();
   const { login } = useContext(AuthContext);
   const { mutate, isError, error, isPending, reset } = useMutation({
      mutationFn: loginAdmin,
      onSuccess: (data) => {
         const { accessToken, refreshToken, admin } = data.data;
         login({ accessToken, refreshToken, adminData: admin });
         navigate("/admin/dashboard");
      },
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const username = formData.get("username");
      const password = formData.get("password");

      mutate({ username, password });

      setTimeout(() => {
         e.target.reset();
      }, 1000);
   };

   return (
      <div className="w-full bg-gray-100 flex items-center justify-center h-[85vh] sm:h-screen">
         <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">
               Sign In
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
               <div>
                  <label className="block text-sm font-medium text-gray-700">
                     Username
                  </label>
                  <input
                     type="text"
                     id="username"
                     name="username"
                     className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
               </div>

               <div>
                  <label className="block text-sm font-medium text-gray-700">
                     Password
                  </label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
               </div>
               <div>
                  <button
                     type="submit"
                     className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                  >
                     Sign In
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
