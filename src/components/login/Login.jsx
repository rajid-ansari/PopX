import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Login = ({ formData, setFormData }) => {
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // validate email and password
        if (formData.email == "" || formData.password == "") {
            alert("All fields are required!");
        } else {
            navigate("/settings");
        }
    };

    return (
        <div className="h-[90vh] md:min-w-[28vw] bg-[#F8F8F8] border border-gray-200">
            <div className="h-full w-full my-5 mx-5">
                <h1 className="font-bold text-2xl text-gray-800 mb-2">
                    Signin to your <br />
                    PopX account
                </h1>
                <p className="text-gray-500 text-lg">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit.
                </p>

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
                        {/* submit btn */}
                        <Button
                            type="submit"
                            className="w-[90%] bg-[#3259c6e5] hover:bg-[#3259c6bd] text-white font-semibold mt-5"
                        >
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
