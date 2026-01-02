import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
// import { SignUp } from './components/SignUp'

function App() {
  return (
    <>
    <Navbar/>
      <div >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
//1:57:30