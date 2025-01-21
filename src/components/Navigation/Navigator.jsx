import {Link} from  "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ModalLogOut from "../Modals/ModalLogOut";
import { resetForm } from "../../store/form/formSlice";

const Navigator = () => {
    const { module, username, email, password }= useSelector(state => state.form);
    console.log("Estado actual en el componente:", { module, username, email, password });
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleLogout = () => {
        dispatch(resetForm("logout"));
        setIsModalVisible(false);
    };

    return (
        <nav className="navbar"> 
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/counter" className="nav-link">Counter</Link>
            <Link to="/think" className="nav-link">Think</Link>
            <Link to="/product" className="nav-link">Product</Link>
            <Link to="/about" className="nav-link">About</Link>
            <span to="/" className="nav-username"> Bienvenid@ {username} || {email}</span>
         <button 
            onClick={() => setIsModalVisible(true)}
            style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
            }}
            className="nav-logout">
            Logout
         </button>
         <ModalLogOut
            visible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            onLogout={handleLogout}
        />
        </nav>
    )
}

export default Navigator