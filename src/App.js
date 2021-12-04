import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
  

  
// } from "react-router-dom"

function App() {
  const [mode, setmode] = useState('light')
  const [switchText, setswitchText] = useState('Enable Dark Mode')
  const [switchStyle, setswitchStyle] = useState({
    color: 'black'
  })
  // const [alertType, setalertType] = useState('')
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#212529'
      setswitchText('Enable Light Mode')
      setswitchStyle({
        color: 'white'
      })
      showAlert("Dark Mode Has Been Enabled", "success")
      document.title = "Word Manipulator - Dark Mode"
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      setswitchText('Enable Dark Mode')
      setswitchStyle({
        color: 'black'
      })
      showAlert("Light Mode Has Been Enabled", "success")
      document.title = "Word Manipulator - Light Mode"
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="WORD M" mode={mode} toggleMode={toggleMode} switchText={switchText} switchStyle={switchStyle} />
      <Alert alert={alert} />
      <div className="container my-3">
        
        {/* <Routes>  */}
              {/* <Route exact path="/About"  element= {<About to="/About"/>} /> */}
          
              {/* <Route exact path="/" element= { */}
              <Textform  showAlert={showAlert} heading="Enter your text" mode={mode} /> 
              {/* } /> */}
        {/* </Routes> */}

      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
