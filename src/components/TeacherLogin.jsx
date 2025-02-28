import React, { useState } from "react";
import axios from "axios";

const TeacherLogin = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:1104/teacher-login", {
      email,
      password,
      
    });
    response.data ? alert("logged in successfully ") : alert("login failed ! try again")
  };
  return (
    <div className="flex items-center justify-center h-screen  ">
      <form className="w-100 ">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            placeholder="your@email.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">
            Forgot password?
          </a>
        </div>
        <button className="w-full bg-indigo-600 text-white p-3 rounded-lg font-medium hover:bg-indigo-700 transition" onClick={handleSubmit}>
          Sign In
        </button>
        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-800">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default TeacherLogin;
