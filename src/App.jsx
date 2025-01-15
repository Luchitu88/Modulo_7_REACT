import './App.css'
//import Default from './components/default'
import Home from './screens/Home'
import Counter from './components/Counter/Counter.jsx';
import Product from './screens/Product'

import Navigator from './components/Navigation/Navigator.jsx';
import Router from './components/Navigation/Router.jsx';
function App() {


  return (
    <>
      <Navigator />
      <Router />
    </>
  )
}

export default App
