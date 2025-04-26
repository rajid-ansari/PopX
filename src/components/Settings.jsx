import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Settings = ({ formData }) => {
    const [profileImg, setProfileImg] = useState(null);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImg(URL.createObjectURL(file));
        }
    };

    return (
        <div className="h-[90vh] md:min-w-[28vw] bg-[#F8F9FA] border border-gray-200 shadow">
            <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4 font-semibold text-lg">
                Account Settings
            </div>

            <div className="px-4 py-3 border-b border-dashed border-gray-400 bg-[#F5F5F5]">
                <div className="flex items-center gap-4 border-b border-dashed border-gray-400 pb-7 relative">
                    
                    {/* profile image */}
                    <div className="relative">
                        <img
                            src={profileImg || "https://via.placeholder.com/80"} // 👈 Default placeholder
                            alt="profile"
                            className="h-20 w-20 rounded-full object-cover border"
                        />
                        
                        {/* upload button */}
                        <label htmlFor="file-upload" className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer">
                            <FaCamera className="text-gray-600 text-xl" />
                            <input type="file" id="file-upload" onChange={handleChange} className="hidden" />
                        </label>
                    </div>

                    {/* user info */}
                    <div>
                        <h1 className="text-lg font-semibold text-wrap">{formData.fullName}</h1>
                        <p className="text-sm text-gray-500 text-wrap">{formData.email}</p>
                    </div>

                </div>

                <div className="py-5 ">
                    <p className="text-sm text-gray-500 font-semibold leading-6 text-wrap">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, <br />
                        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et <br />
                        Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Settings;

























// import React, { useState } from "react";
// import { FaCamera } from "react-icons/fa";

// const Settings = ({ formData }) => {
//     const [profileImg, setProfileImg] = useState(null)

//     const handleChange = (e) => {
//         console.log(e.target.files[0])
//         const file = e.target.files[0];
//         setProfileImg(URL.createObjectURL(file))
//     }

//     return (
//         <div className="h-[90vh] md:min-w-[28vw]  bg-[#F8F9FA] border border-gray-200 shadow">
//             <div className="h-14 bg-white border-b border-gray-200 flex items-center px-4 font-semibold text-lg">
//                 Account Settings
//             </div>

//             <div className="px-4 py-3 border-b border-dashed border-gray-400 bg-[#F5F5F5]">
//                 <div className="flex items-center gap-3 border-b border-dashed border-gray-400 pb-7 overflow-hidden">
//                     <img
//                         src={profileImg}
//                         alt="profile pic"
//                         className="h-18 w-18 rounded-full object-cover border"
//                     />
//                     {/* image upload */}
//                     <label htmlFor="file-upload" className="cursor-pointer">
//                     <input type="file" id="file-upload" onChange={handleChange} className="hidden" /> 
//                         <FaCamera className="absolute left-[41vw] " />
//                     </label>

//                     <div>
//                         <h1 className="text-lg "> {formData.fullName} </h1>
//                         <p className="text-sm text-gray-500">
//                             {" "}
//                             {formData.email}{" "}
//                         </p>
//                     </div>
//                 </div>
//                 <div className="py-5">
//                     <p className="text-sm text-gray-500 font-semibold">
//                         Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
//                         Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
//                         Dolore Magna Aliquyam Erat, Sed Diam
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Settings;
