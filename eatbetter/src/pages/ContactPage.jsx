
import React, { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";

function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {

    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    return newErrors;

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      try {

        setLoading(true);

        const res = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (data.success) {

          toast.success("Message sent successfully ✅");

          setFormData({
            name: "",
            email: "",
            message: ""
          });

        } else {

          toast.error("Failed to send message");

        }

      } catch (err) {

        console.log(err);
        toast.error("Server error");

      } finally {

        setLoading(false);

      }

    }

  };

  return (

    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-10">

      <h1 className="text-3xl font-bold text-center mb-12">
        REACH OUT TO US
      </h1>

      {/* Contact Cards */}

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">

        <div className="bg-white shadow-md rounded-xl p-8 text-center">
          <Mail className="mx-auto text-orange-500 mb-4" size={30} />
          <h3 className="font-semibold text-lg">Mail</h3>
          <p className="text-gray-500 text-sm mt-2">
            support@eatbetter.com
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8 text-center">
          <MessageCircle className="mx-auto text-orange-500 mb-4" size={30} />
          <h3 className="font-semibold text-lg">WhatsApp Only</h3>
          <p className="text-gray-500 text-sm mt-2">
            +91 9000000000
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-8 text-center">
          <Phone className="mx-auto text-orange-500 mb-4" size={30} />
          <h3 className="font-semibold text-lg">Call</h3>
          <p className="text-gray-500 text-sm mt-2">
            +91 9000000000
          </p>
        </div>

      </div>


      {/* Contact Form */}

      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl font-bold text-center mb-10">
          Contact us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Name */}

            <div>

              <label className="block mb-2 text-sm font-semibold">
                NAME
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}

            </div>

            {/* Email */}

            <div>

              <label className="block mb-2 text-sm font-semibold">
                EMAIL
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-md"
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

            </div>

          </div>

          {/* Message */}

          <div>

            <label className="block mb-2 text-sm font-semibold">
              MESSAGE
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-3 rounded-md"
            ></textarea>

            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

          </div>

          <div className="text-center">

            <button
              disabled={loading}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default ContactPage;

