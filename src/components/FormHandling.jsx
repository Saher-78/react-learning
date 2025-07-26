import React, { useState } from 'react';

// Main App component
const FormHandling = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        contact_number: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("FormData =", formData)
        setFormData({
            name: "",
            email: "",
            password: "",
            contact_number: ""
        })
    }
    return (
        <>

            <style>
                {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to right, #3b82f6, #9333ea); /* from-blue-500 to-purple-600 */
          padding: 16px; /* p-4 */
        }

        .form-card {
          background-color: #ffffff;
          padding: 32px; /* p-8 */
          border-radius: 12px; /* rounded-xl */
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-2xl */
          width: 100%;
          max-width: 448px; /* max-w-md */
          border: 1px solid #e5e7eb; /* border border-gray-200 */
        }

        .form-title {
          font-size: 30px; /* text-3xl */
          font-weight: 800; /* font-extrabold */
          color: #1f2937; /* text-gray-900 */
          margin-bottom: 32px; /* mb-8 */
          text-align: center;
        }

        .form-group {
          margin-bottom: 24px; /* space-y-6 equivalent, adjusted for individual groups */
        }

        .form-group:last-child {
          margin-bottom: 0; /* Remove margin from the last group before the button */
        }

        .form-label {
          display: block;
          font-size: 14px; /* text-sm */
          font-weight: 500; /* font-medium */
          color: #374151; /* text-gray-700 */
          margin-bottom: 4px; /* mb-1 */
        }

        .form-input {
          display: block;
          width: 100%;
          padding: 10px 16px; /* px-4 py-2 */
          border: 1px solid #d1d5db; /* border border-gray-300 */
          border-radius: 8px; /* rounded-lg */
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
          font-size: 14px; /* sm:text-sm */
          transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .form-input:focus {
          outline: none;
          border-color: #3b82f6; /* focus:border-blue-500 */
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5); /* focus:ring-blue-500 */
        }

        .submit-button {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 12px 16px; /* py-3 px-4 */
          border: 1px solid transparent;
          border-radius: 8px; /* rounded-lg */
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
          font-size: 18px; /* text-lg */
          font-weight: 600; /* font-semibold */
          color: #ffffff;
          background-color: #2563eb; /* bg-blue-600 */
          cursor: pointer;
          transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
        }

        .submit-button:hover {
          background-color: #1d4ed8; /* hover:bg-blue-700 */
          transform: scale(1.05); /* transform hover:scale-105 */
        }

        .submit-button:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5), 0 0 0 2px #ffffff; /* focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 */
        }
        `}
            </style>

            <div className="container">
                <div className="form-card">
                    <h2 className="form-title">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="form-input"
                                required
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="form-input"
                                required
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="form-group">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="form-input"
                                required
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Contact Number Field */}
                        <div className="form-group">
                            <label htmlFor="contactNumber" className="form-label">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                id="contactNumber"
                                placeholder="Enter your contact number"
                                className="form-input"
                                name='contact_number'
                                value={formData.contact_number}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-group">
                            <button
                                type="submit"
                                className="submit-button"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormHandling;
