import { motion } from "motion/react"; 
import ModalInfo from "../Modals/ModalInfo.jsx";
import { useState, useEffect } from "react";
import useForm from "../Hooks/useForm.js";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setEmail } from "../../store/form/formSlice.js";
import { initialState } from "../../store/form/formSlice.js";

const FormWithMotionAndHook = ({ titleForm }) => {
    const dispatch = useDispatch();
    const reduxFormState = useSelector((state) => state.form);
    const { formData, handleChange, resetForm, setFormData } = useForm(reduxFormState);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("success");
    const [showPassword, setShowPassword] = useState(false); 

    useEffect(() => {
        setFormData({ ...reduxFormState });
    }, [reduxFormState, setFormData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (initialState.password === formData.password) {
            dispatch(setUsername(formData.username));
            dispatch(setEmail(formData.email));
            setModalType("success");
        } else {
            setModalType("warning");
        }
        setShowModal(true);
    };

    const togglePasswordVisibility = () => {
        setShowPassword ((prev)=> !prev); 
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
        resetForm(); 
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo
                visible={showModal}
                message= {modalType === "success" ? 'Bienvenid@ ' + formData.username : "Username/Password incorrectos"}
                type={modalType}
                onClose={onCloseModalInfo}
            />
            <form onSubmit={handleSubmit}>
                <motion.div initial={{ x: -100 }} 
                            animate={{ x: 0 }} 
                            transition={{ duration: 0.5 }}>
                    <h1>{titleForm}</h1>
                </motion.div>
                <motion.div initial={{ x: -100 }} 
                            animate={{ x: 0 }} 
                            transition={{ duration: 0.5 }}>
                    <div>
                        <label style={{ marginLeft: "20px" }}>
                            Module:
                            <input
                                type="text"
                                name="module"
                                value={formData.module}
                                onChange={handleChange}
                                required
                                style={{
                                    width: "60%",
                                    padding: "10px",
                                    marginTop: "50px",
                                    marginBottom: "10px",
                                    marginLeft: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                }}
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div initial={{ x: -100 }} 
                            animate={{ x: 0 }} 
                            transition={{ duration: 0.5 }}>
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username} 
                                onChange={handleChange} 
                                required
                                style={{
                                    width: "60%",
                                    padding: "10px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    marginLeft: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                }}
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div initial={{ x: -100 }} 
                            animate={{ x: 0 }} 
                            transition={{ duration: 0.5 }}>
                    <div>
                        <label style={{ marginLeft: "30px" }}>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email} 
                                onChange={handleChange}
                                required
                                style={{
                                    width: "60%",
                                    padding: "10px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    marginLeft: "15px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                }}
                            />
                        </label>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100 }} 
                            animate={{ y: 0 }} 
                            transition={{ duration: 0.5 }}>
                    <div>
                        <label style={{ marginLeft: "10px" }}>
                            Password:
                            <input
                                type={showPassword ? "text" : "password"} 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{
                                    width: "60%",
                                    padding: "10px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    marginLeft: "10px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                }}
                            />
                                <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                style={{
                                position: "absolute",
                                border: "none",
                                backgroundColor: "blue",
                                color: "white",
                                cursor: "pointer",
                                borderRadius: "10px",
                                padding: "10px",
                                marginLeft: "10px",
                                marginRight: "230px",
                                marginTop: "5px",
                                }}
                                 >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </label>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100 }} 
                            animate={{ y: 0 }} 
                            transition={{ duration: 0.5 }}>
                    <button
                        type="submit"
                        style={{
                            padding: "10px 15px",
                            fontSize: "16px",
                            color: "white",
                            backgroundColor: "blue",
                            border: "none",
                            borderRadius: "10px",
                            cursor: "pointer",
                            width: "20%",
                            marginTop: "15px",
                            marginLeft: "10%",
                            boxShadow: "0px 4px 6px rgba(60, 144, 255, 0.45)",
                        }}
                    >
                        Login
                    </button>
                </motion.div>
            </form>
        </motion.div>
    );
}

export default FormWithMotionAndHook;