import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

export function Home(){
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function handleLogout(){
        dispatch(logout)
        navigate("/login")
    }
    return (
        <>
        <div>Home</div>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}
