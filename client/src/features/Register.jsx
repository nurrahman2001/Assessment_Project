import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail, MdDateRange } from "react-icons/md";

function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        birth: "",
        password: "",
    });

    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //  Submits the form data of register page to server.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:5000/api/auth/register",
                formData
            );
            if (!data.status) {
                console.log("Registration failed");
            }
            else {
                navigate("/login");
            }

        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-b from-cyan-500 to-teal-400">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-96 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cyan-200 px-10 py-3 shadow text-gray-700 text-md font-bold">
                    SIGN UP
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center mt-8 mb-6">
                        <div className="bg-gray-600 p-4 rounded-full">
                            <FaUser className="text-white text-3xl" />
                        </div>
                    </div>

                    <div className="mb-4 relative">
                        <FaUser className="absolute text-gray-400 top-3 left-3" />
                        <input
                            onChange={handleChange}
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="name"
                            className="pl-10 pr-4 py-2 w-full rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <MdEmail className="absolute text-gray-400 top-3 left-3" />
                        <input
                            onChange={handleChange}
                            value={formData.email}
                            type="email"
                            name="email"
                            placeholder="email"
                            className="pl-10 pr-4 py-2 w-full rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <MdDateRange className="absolute text-gray-400 top-3 left-3" />
                        <input
                            onChange={handleChange}
                            value={formData.birth}
                            type="text"
                            name="birth"
                            placeholder="Date of birth: dd/mm/yyyy"
                            className="pl-10 pr-4 py-2 w-full rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="mb-4 relative">
                        <FaLock className="absolute text-gray-400 top-3 left-3" />
                        <input
                            onChange={handleChange}
                            value={formData.password}
                            type="password"
                            name="password"
                            placeholder="password"
                            className="pl-10 pr-4 py-2 w-full rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>

                    <div className="flex items-center text-gray-400 mb-6">
                        <span>Already have an account ?</span>
                        <Link to="/login" className="hover:underline px-1">Login</Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 rounded-md shadow transition"
                    >
                        SIGN UP
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
