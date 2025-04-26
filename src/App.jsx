import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Settings from "./components/Settings";

const App = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
    });

    return (
        <div className="min-h-screen w-screen bg-[#F8F9FA] flex items-center justify-center">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />

                    <Route
                        path="/signup"
                        element={
                            <Signup
                                formData={formData}
                                setFormData={setFormData}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Login
                                formData={formData}
                                setFormData={setFormData}
                            />
                        }
                    />
                    <Route
                        path="/settings"
                        element={<Settings formData={formData} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
