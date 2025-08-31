import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useGoogleLogin } from "@react-oauth/google";
import { useUser } from "../context/UserContext";

export default function Register() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormdata] = useState({
    fname: "",
    lname: "",
    address: "",
    gender: "",
    dob: "",
    phone: "",
  });
  const { setUser } = useUser();
  
const defaultAvatar = "https://www.gravatar.com/avatar/?d=mp&f=y";
  useEffect(() => {
    if (userInfo) {
      setFormdata((prev) => ({
        ...prev,
        fname: userInfo.given_name || "",
        lname: userInfo.family_name || "",
        address: userInfo.email || "",
      }));
    }
  }, [userInfo]);
  const login = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    console.log('access_token:', tokenResponse.access_token);
    const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenResponse.access_token}`,
      },
    });

    const profile = await res.json();
    console.log('User profile:', profile);
    setUserInfo(profile);
  },
  onError: (error) => {
    console.error('Login Failed:', error);
  },
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmittedData(formData);
    setUser(formData);
    setFormdata({
      fname: "",
      lname: "",
      address: "",
      gender: "",
      dob: "",
      phone: "",
    });
    navigate("/events ");
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center pt-20 px-4 py-20">
      {/* Google Login Button - Top right only for large screens */}
      <div className="hidden lg:block absolute top-20 right-6 z-10">
        <button
          type="button"
          onClick={login}
          className="text-sm font-medium text-gray-700 bg-white px-6 py-3 rounded-full shadow-xl hover:shadow-xl transition-all duration-200 transform hover:scale-105 cursor-pointer"
        >
          Login With Google
        </button>
      </div>

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

          <div className="space-y-2">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                placeholder="Enter your first name"
                value={formData.fname}
                onChange={handleChange}
                required
                className="w-full text-sm px-4 py-1 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 focus:bg-white text-gray-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                placeholder="Enter your last name"
                value={formData.lname}
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
                name="address"
                required
                placeholder="Enter your email"
                value={formData.address}
                onChange={handleChange}
                className="w-full text-sm px-4 py-1 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 focus:bg-white text-gray-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full text-sm px-4 py-1 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 focus:bg-white text-gray-700"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="something else">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob || ""}
                onChange={handleChange}
                required
                className="w-full text-sm px-4 py-1 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none bg-gray-50 focus:bg-white text-gray-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                placeholder="Enter your phone number"
                value={formData.phone}
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

      {/* Google Login Button - Shown below form only on small/medium screens */}
      <div className="block lg:hidden mt-6 w-full max-w-sm flex justify-center my-20">
        <button
          type="button"
          onClick={login}
          className="w-full sm:w-auto text-sm font-medium text-gray-700 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-200 transform hover:scale-105 cursor-pointer"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
}

