import { useSelector } from "react-redux";
const About = () => {
    const count = useSelector((state) => state.product.initialValue)
    return (
        <> 
            <p> Component About</p>
            Valor de InitialValue es <span>{count}</span>

        </>
    )
}

export default About;