import { motion } from "motion/react"; 
import ModalInfo from "../Modals/ModalInfo.jsx";
import { useState } from "react";
import useForm from "../Hooks/useForm.js";
import { initialState } from "../../store/form/formSlice.js"; 

function FormWithMotionAndHook({ titleForm }) {

    const { formData, handleChange, resetForm } = useForm(initialState);

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowModal(true);
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
        resetForm(); // Reseteamos el formulario al estado inicial
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
                message="Formulario enviado con éxito"
                onClose={onCloseModalInfo}
            />
            <form onSubmit={handleSubmit}>
                <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
                    <h1>{titleForm}</h1>
                </motion.div>
                <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
                    <div>
                        <label style={{ marginLeft: "20px" }}>
                            Module:
                            <input
                                type="text"
                                name="module"
                                value={formData.module}
                                readOnly
                                disabled
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
                <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
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
                <motion.div initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
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
                <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
                    <div>
                        <label style={{ marginLeft: "10px" }}>
                            Password:
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                readOnly
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
                <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
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