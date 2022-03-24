import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";

 
function App() {
  const[btnText,setbtnText] = useState("")
  const[alert,setAlert] = useState(null)
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setbtnText("Enable Dark Mode");
      showAlert("Dark Mode Enabled","success");
      document.title="TextUtils - Dark Mode";
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setbtnText("Disable Dark Mode");
      showAlert("Light Mode Enabled","success");
      document.title="TextUtils - Light Mode";

    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text={btnText} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/" element={<TextForm  showAlert = {showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>  
        </Routes>
      </div>
    </Router>
    </> 
  );
}

export default App;