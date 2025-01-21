import { useState, useEffect } from "react";

const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState({ ...initialState });

    useEffect(() => {
        setFormData({ ...initialState });
    }, [initialState]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData({ ...initialState }); // metodo para limpiar el formulario y tener la info para un reingreso al sistema
    };

    return {
        formData,
        handleChange,
        resetForm,
        setFormData, 
    };
};

export default useForm;