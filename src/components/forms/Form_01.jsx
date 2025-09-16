import { useState } from "react";

function Form_01() {
    const [formType, setFormType] = useState("signup");
    const inputStyle = "border border-[#0004] rounded w-full p-2";
    return (
        <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-tl  from-teal-900 to-teal-600 px-2 sm:px-0">
            <div className="w-xs sm:w-2xl md:w-3xl h-10/12 bg-white transition duration-300 rounded-2xl relative overflow-hidden">
                <div
                    className={`${
                        formType === "signup"
                            ? "left-0"
                            : "left-full -translate-x-full"
                    } absolute z-10 bg-[url('/form-img01.jpg')] h-full w-1/2 bg-cover rounded-2xl overflow-hidden opacity-100 transition-left ease-out duration-150 hidden sm:block`}
                >
                    {/* image filter */}
                    <div className="bg-gradient-to-t from-[#0007] via-transparent to-[#0007] h-full w-full absolute"></div>
                    {/* signup text */}
                    {formType === "signup" ? (
                        <div className="text-white h-full w-full flex items-center justify-center flex-col relative z-10">
                            <h1 className="backdrop-blur-xs text-3xl font-extrabold text-shadow-ms">
                                Create Your Account
                            </h1>
                            <p className="backdrop-blur-xs">
                                Share your project and learn.
                            </p>
                        </div>
                    ) : (
                        <div className="text-white h-full w-full flex items-center justify-center flex-col relative z-10">
                            <h1 className="backdrop-blur-xs text-3xl font-extrabold text-shadow-ms">
                                Hi, Welcome Back :)
                            </h1>
                            <p className="backdrop-blur-xs">
                                Share your project and learn.
                            </p>
                        </div>
                    )}
                </div>

                <div
                    className={`w-full sm:w-1/2 absolute h-full transition-right ease-out duration-300 ${
                        formType === "signup"
                            ? "right-0"
                            : "right-full translate-x-full"
                    }`}
                >
                    {formType === "signup" ? (
                        <div className="flex flex-col h-full w-full py-4 gap-4">
                            <h1 className="text-center font-bold text-3xl">
                                Sign Up
                            </h1>
                            <form className="flex flex-col items-center gap-2 w-10/12 sm:w-9/12 mx-auto">
                                <input
                                    className={inputStyle}
                                    type="text"
                                    placeholder="First Name"
                                />
                                <input
                                    className={inputStyle}
                                    type="text"
                                    placeholder="Last Name"
                                />
                                <input
                                    className={inputStyle}
                                    type="text"
                                    placeholder=" Email address"
                                />
                                <input
                                    className={inputStyle}
                                    type="text"
                                    placeholder="Password"
                                />
                                <div className="w-full flex gap-2 px-2">
                                    <input type="checkbox" />
                                    <label htmlFor="">
                                        Accept Terms & Conditions
                                    </label>
                                </div>
                                <button className="w-full bg-black text-white rounded py-1">
                                    Join us
                                </button>
                                <div className="w-full h-8 relative flex items-center">
                                    <hr className="w-full" />
                                    <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-xl">
                                        or
                                    </span>
                                </div>
                                <button className="py-1 flex items-center justify-center gap-2 bg-black text-white w-full rounded">
                                    <img
                                        src="/google-icon.png"
                                        alt="google icon"
                                        className="w-7 h-7 object-cover aspect-square"
                                    />
                                    <span>Sign up with Google</span>
                                </button>
                                <button>
                                    Already have account?{" "}
                                    <span
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setFormType("login");
                                        }}
                                        className="text-blue-600 cursor-pointer font-semibold"
                                    >
                                        Login in
                                    </span>
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="text-center py-4">
                            <h1 className="font-bold text-3xl">Login Form</h1>
                            <form className="flex flex-col items-center mx-auto pt-12 gap-4 w-10/12 sm:w-9/12">
                                <input
                                    type="text"
                                    className={inputStyle}
                                    placeholder="Enter email or username"
                                />
                                <input
                                    type="text"
                                    className={inputStyle}
                                    placeholder="Enter password"
                                />
                                <button className="bg-black w-full text-white p-1 rounded">
                                    Login
                                </button>
                                <div className="w-full h-8 relative flex items-center">
                                    <hr className="w-full" />
                                    <span className="absolute left-1/2 -translate-x-1/2 bg-white px-2 text-xl">
                                        or
                                    </span>
                                </div>
                                <button className="py-1 flex items-center justify-center gap-2 bg-black text-white w-full rounded">
                                    <img
                                        src="/google-icon.png"
                                        alt="google icon"
                                        className="w-7 h-7 object-cover aspect-square"
                                    />
                                    <span>Sign up with Google</span>
                                </button>
                                <button>
                                    Din't have account?{" "}
                                    <span
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setFormType("signup");
                                        }}
                                        className="cursor-pointer font-semibold text-blue-600"
                                    >
                                        Sign up
                                    </span>
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Form_01;
