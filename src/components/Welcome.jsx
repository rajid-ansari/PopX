import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className="h-[90vh] md:min-w-[28vw] bg-[#F8F8F8] border border-gray-200">
            <div className="h-full w-full flex flex-col justify-end p-9 ">
                <h1 className="text-2xl font-bold text-gray-800 mb-1 ">
                    Welcome to PopX
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, <br /> consectetur adipisicing
                    elit.
                </p>
                {/* signup button */}
                <Button
                    type="button"
                    className="rounded-lg cursor-pointer text-gray-50 bg-[#5A3CD7] hover:bg-[#5b3cd7e2] transition font-semibold"
                    onClick={() => navigate("/signup")}
                >
                    Create Account
                </Button>

                {/* login button */}
                <Button
                    type="button"
                    className=" bg-[#CEC2FA] hover:bg-[#c7bbf3] text-[#5A3CD7] transition font-semibold mt-3"
                    onClick={() => navigate("/login")}
                >
                    Already Registered? Login
                </Button>
            </div>
        </div>
    );
};

export default Welcome;
