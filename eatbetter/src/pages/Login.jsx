import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation
  const validate = () => {

    let newErrors = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Login
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    try {

      const res = await axios.post(
        "http://localhost:5000/user/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      window.dispatchEvent(new Event("authChange"));

      navigate("/my-account");

    } 
    catch (err) {

      alert(
        err.response?.data?.error || "Login Failed"
      );

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="w-[380px] bg-white p-8 rounded shadow-md"
      >

        <h1 className="text-3xl mb-8 text-center font-medium">
          Login
        </h1>

        {/* Email */}

        <div className="mb-6">

          <label className="text-xs tracking-widest">
            EMAIL
          </label>

          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border mt-2 p-3"
          />

          {errors.email &&
            <p className="text-red-500 text-sm">
              {errors.email}
            </p>
          }

        </div>


        {/* Password */}

        <div className="mb-6">

          <div className="flex justify-between">

            <label className="text-xs tracking-widest">
              PASSWORD
            </label>

            {/*<Link to="/forgot-password" className="text-xs text-orange-500">
Forgot password?
</Link>*/}

          </div>

          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border mt-2 p-3"
          />

          {errors.password &&
            <p className="text-red-500 text-sm">
              {errors.password}
            </p>
          }

          {/* Show password */}

          <div className="mt-2 flex items-center gap-2">

            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e)=>setShowPassword(e.target.checked)}
            />

            <span className="text-sm">
              Show Password
            </span>

          </div>

        </div>


        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold"
        >
          SIGN IN
        </button>


        <p className="mt-6 text-center text-gray-600">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-orange-500"
          >
            Create account
          </Link>

        </p>

      </form>

    </div>

  );

}

export default Login;