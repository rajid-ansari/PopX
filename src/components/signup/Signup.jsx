import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Signup = ({ formData, setFormData }) => {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // validate form data
        const { fullName, phoneNumber, email, password, companyName } =
            formData;
        if (
            fullName == "" ||
            phoneNumber == "" ||
            email == "" ||
            password == "" ||
            companyName == ""
        ) {
            alert("All fields are required!");
        } else {
            navigate("/settings");
        }
    };

    return (
        <div className="h-[90vh] md:min-w-[28vw] bg-[#F8F8F8] border border-gray-200">
            <div className="h-full w-full my-5 mx-5">
                <h1 className="font-bold text-3xl text-gray-800 mb-2">
                    Create your <br />
                    PopX account
                </h1>

                <div className="w-full">
                    <form onSubmit={handleSubmit}>
                        {/* name input */}
                        <Input
                            label="Full Name"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        {/* phone number input */}
                        <Input
                            label="Phone Number"
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        {/* email input */}
                        <Input
                            label="Email Address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {/* password input */}
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        {/* company name input */}
                        <Input
                            label="Company Name"
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />

                        <p className="mt-3 font-semibold">
                            Are you an Agency?{" "}
                            <span className="text-red-500">*</span>
                        </p>
                        <input
                            type="radio"
                            name="agency"
                            value="yes"
                            className="scale-150 mr-3"
                            required={true}
                        />
                        <label className="mr-6 font-semibold">Yes</label>
                        <input
                            type="radio"
                            name="agency"
                            value="no"
                            className="scale-150 mr-3"
                            required={true}
                        />
                        <label className="mr-6 font-semibold">No</label>
                        <br />

                        {/* submit btn */}
                        <Button
                            type="submit"
                            className="w-[90%] bg-[#3259c6e5] hover:bg-[#3259c6bd] text-white font-semibold mt-5"
                        >
                            Signup
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
