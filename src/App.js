import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);

    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextPro - DarkMode';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextPro - LightMode';
    }
  }
  return (
   <>
   
   <Navbar title="TextPro" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert} />
   
   <div className='container my-3'> </ div>
   
      <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> 
      
   
      
  
   
  
   </>
  );
}

export default App;

