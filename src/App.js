import React from 'react'
import './App.css'
import About from './Components/useEffects/useContext/About';
// import Home from './Components/useEffects/useContext/Home';
// import ReactLoginForm from './Components/ReactLoginForm'
// import UseEffect_One from './Components/useEffects/UseEffect_One';
// import UseEffect_two from './Components/useEffects/UseEffect_two';
// import useEffect_two from './Components/useEffects/UseEffect_two';
// import UseReduser from './Components/useEffects/UseReduser';
// import ComA from './Components/useCotext/ComA';
import Navbar from './Components/useEffects/useContext/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/useEffects/useContext/Login';
import MainConatainer from './Components/todo/MainConatainer';


// import ReactArray from './Components/ReactArray'
// import UseStateObject from './Components/UseStateObject'

function App() {
  // const [firstText, setFirstText] = useState("Ravi Rautela");

  // const changeText = () => {
  //   if (firstText == "Ravi Rautela") {
  //     setFirstText("I Am Happy");
  //   }
  //   else {
  //     setFirstText("Ravi Rautela");
  //   }
  // }
  return (
    // <div className='mainContent'>
    //   <h1>{firstText}</h1>
    //   <button onClick={changeText}>Click Me</button>
    // </div>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={(<MainConatainer />)} />
          <Route exact path="/about" element={(<About />)} />
          <Route exact path="/login" element={(<Login />)} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
