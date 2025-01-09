
import Body from '../components/Home/Body.jsx'
import Footer from '../components/Home/Footer.jsx'
import OpenLink from '../components/Core/OpenLink.jsx'
import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
const Home = () => {
    return (
        <>
         <>
          <OpenLink 
            redirectURL="https://vite.dev" 
            logoImage={viteLogo} 
            />
            <OpenLink 
            redirectURL="https://react.dev" 
            logoImage={reactLogo} 
            />
            <OpenLink 
            redirectURL="https://github.com/Luchitu88/Modulo_7_REACT" 
            logoImage={githubLogo} 
            />
            </>
            <Body />
            <Footer />
        </>
    )
}

export default Home