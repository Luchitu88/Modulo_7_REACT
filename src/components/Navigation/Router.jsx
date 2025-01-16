import Home from '../../screens/Home.jsx'
import About from '../../screens/About.jsx'
import Think from '../../screens/Think.jsx'
import Product from '../../screens/Product.jsx'
import Counter from '../Counter/Counter.jsx'
import { Routes, Route } from 'react-router'
import Login from '../../screens/Login.jsx'

const Router = () => {
    return (
        <Routes>
           <Route index element={<Home />} />
           <Route path="product" element={<Product />} />
           <Route path="login" element={<Login/>} />
           <Route path="counter" element={<Counter />} />
           <Route path="think" element={<Think />} />
           <Route path="about" element={<About />} />
        </Routes>
    )
}

export default Router