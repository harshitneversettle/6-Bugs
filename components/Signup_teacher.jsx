import axios from "axios";
import { useState } from "react";
import { Link} from "react-router";

export default function Signup_teacher() {
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setprofession] = useState("");
  const [degree, setdegree] = useState("");
  const [passingYear, setpassingYear] = useState("");
  const [experience, setexperience] = useState("");
  const [experties, setexperties] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:1104/sign-up-teacher", {
      name,
      image,
      email,
      password,
      profession,
      degree,
      passingYear,
      experience ,
      experties ,
    });
    alert(response.data) ;
    name("")
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 p-6">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Sign Up (mentor)
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join us by filling out the form below
        </p>
        <form className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={(e) => setname(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="text"
            name="image"
            placeholder="image.png"
            onChange={(e) => setimage(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={(e) => setemail(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            onChange={(e) => setprofession(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            onChange={(e) => setdegree(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="number"
            name="passingYear"
            placeholder="Year of Passing"
            onChange={(e) => setpassingYear(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="text"
            name="experience"
            placeholder="experience:5+"
            onChange={(e) => setexperience(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="text"
            name="expertise"
            placeholder="expertise"
            onChange={(e) => setexperties(e.target.value)}
            className="w-full p-4 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg font-bold transition duration-300 shadow-lg"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Signup as 
          <Link
            to="/sign-up-student"
            className="text-blue-600 hover:underline font-semibold ml-1"
          >
            mentee
          </Link>
        </p>
      </div>
    </div>
  );
}
