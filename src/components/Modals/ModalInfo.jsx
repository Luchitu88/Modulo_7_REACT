import { motion } from "motion/react"

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose, type = "success" }) => {
    if (!visible) {
        return null;
    }
    const classModal = type === "success" ? "modal-success" : "modal-warning";
return (
        <div className="modal-overlay">
            <motion.div
                className={`notification-success ${classModal}`}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div>
                    <p>{message}</p>
                </div>
                <button
                    className="close-btn-success"
                    onClick={onClose}>
                    X
                </button>
            </motion.div>
        </div>
    );
};

export default ModalInfo;