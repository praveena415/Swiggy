import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import {Briefcase, ChevronDown, CircleHelp, House, Search, ShoppingCartIcon, User} from "lucide-react"

export default function Navbar(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () =>{
        dispatch(logout());
        navigate("/login")
    }
    return(
        <>
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shadow-sm">
            <div className="flex items-center ">
                <div className="h-10 w-10 rounded-full bg-orange-500 flex justify-center items-center  mr-4">
                    <House size = {24} className="text-white"/>
                </div>

                <div className="flex items-center">
                    <span className="font-semibold">Other</span>
                    <ChevronDown size={16} className="ml-1 text-gray-600"/>
                </div>
            </div>

            {/* Nav Items */}
            <div className="flex items-center space-x-6">
                <div className="flex items-center">
                    <Briefcase size={20} className="mr-1"/>
                    <span className="hover:text-orange-500 cursor-pointer">Swiggy Corporate</span>
                </div>

                <div className="flex items-center">
                    <Search size={20} className="mr-1"/>
                    <span className="hover:text-orange-500 cursor-pointer">Search</span>
                </div>

                <div className="flex items-center">
                    <CircleHelp size={20} className="mr-1"/>
                    <span className="hover:text-orange-500 cursor-pointer">Help</span>
                </div>

                <div className="flex items-center">
                    <User size={20} className="mr-1"/>
                    <span className="hover:text-orange-500 cursor-pointer">SignIn</span>
                </div>

                <div className="flex items-center">
                    <div className="relative flex">
                        <ShoppingCartIcon size={20}/>
                        <span className="absolute -top-2 -right-2 bg-white border-gray-300 rounded-full w-5 h-5 flex justify-center text-sm font-bold">0</span>
                        <span className="ml-1 hover:text-orange-500 cursor-pointer">Cart</span>
                    </div>
                </div>

                <button onClick={handleLogout} className="shadow-md px-6 py-2 bg-orange-500 text-white cursor-pointer rounded-lg hover:bg-orange-600">Logout</button>
            </div>
        </nav>
        </>
    )
}