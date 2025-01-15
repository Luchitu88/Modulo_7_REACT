import { useSelector } from "react-redux";
import { useState } from "react";
const About = () => {
    const count = useSelector((state) => state.product.initialValue)
    const [nameComponent, setNameComponent] = useState('About')
    return (
        <> 
            <p> Component: { nameComponent }</p>
            <button onClick={() => {setNameComponent('Curso de React')}}>Press</button>
            <p>
            Valor InitialValue = <span>{count}</span>
            </p>
        </>
    )
}

export default About;