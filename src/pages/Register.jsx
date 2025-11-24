import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    consfirmPassword: "",
  });
  const { signup } = useAuth(); 
  const [error, setError] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    setError("");
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const res = await signup({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    if(res.success){
      setFormdata({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/events ");
    }
    else {
      setError(result.message || "Registration failed");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-20 px-4 py-20">
      

      {/* Registration Form */}
      <form onSubmit={submitData} className="w-full max-w-lg">
        <div
          className="bg-white rounded-3xl shadow-md p-8 backdrop-blur-lg bg-opacity-95"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <h1 className="text-2xl font-bold text-center mb-2  bg-gradient-to-r from-purple-700 to-blue-300 bg-clip-text text-transparent">
            Registration Here
          </h1>

          {error && (
            <p className="text-red-500 text-xs mb-2 text-center">{error}</p>
          )}

          <div className="space-y-2">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your first name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full text-sm px-4 py-1 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 focus:bg-white text-gray-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-sm px-4 py-1 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 focus:bg-white text-gray-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full text-sm px-4 py-1 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 focus:bg-white text-gray-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full text-sm px-4 py-1 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 focus:bg-white text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg  text-lg cursor-pointer transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

