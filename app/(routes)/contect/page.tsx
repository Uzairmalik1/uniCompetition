"use client"; // Enable client-side rendering for form submission
import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "@/components/navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact_us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setErrorMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/2 mb-6 md:mb-0 pr-8">
            <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
            <p className="mt-2 text-gray-600 pr-6">
              We would love to hear from you! Please fill out the form below.
            </p>
          </div>
          <div className="md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">
                  Message:
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>

              {/* Success Message */}
              {successMessage && (
                <p className="mt-4 text-green-500 text-center">
                  {successMessage}
                </p>
              )}

              {/* Error Message */}
              {errorMessage && (
                <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
