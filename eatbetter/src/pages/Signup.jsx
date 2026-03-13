import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // validation
  const validate = () => {

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name required";
    }

    if (!form.email) {
      newErrors.email = "Email required";
    } 
    else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.password) {
      newErrors.password = "Password required";
    } 
    else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill all fields correctly");
      return false;
    }

    return true;
  };

  // submit form
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/user/signup",
        {
          username: form.name,
          email: form.email,
          password: form.password
        }
      );

      toast.success(res.data.message || "Account created successfully 🎉");

      setForm({
        name: "",
        email: "",
        password: ""
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } 
    catch (err) {

      console.log("Signup error:", err.response?.data);

      toast.error(
        err.response?.data?.error || "Signup failed"
      );

    } 
    finally {
      setLoading(false);
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="w-[380px] bg-white p-8 rounded shadow-md"
      >

        <h1 className="text-3xl mb-8 text-center font-medium">
          Create Account
        </h1>

        {/* Name */}
        <div className="mb-5">

          <label className="text-xs tracking-widest">
            NAME
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border mt-2 p-3"
          />

          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name}
            </p>
          )}

        </div>


        {/* Email */}
        <div className="mb-5">

          <label className="text-xs tracking-widest">
            EMAIL
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border mt-2 p-3"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email}
            </p>
          )}

        </div>


        {/* Password */}
        <div className="mb-6">

          <label className="text-xs tracking-widest">
            PASSWORD
          </label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full border mt-2 p-3"
          />

          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password}
            </p>
          )}

        </div>


        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition"
        >

          {loading ? "Creating..." : "CREATE ACCOUNT"}

        </button>


        <p className="mt-6 text-center text-gray-600">

          Already have account?{" "}

          <Link
            to="/login"
            className="text-orange-500 font-medium"
          >
            Login
          </Link>

        </p>

      </form>

    </div>

  );

}

export default Signup;