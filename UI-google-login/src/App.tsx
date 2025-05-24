import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { PersonalData } from './components/PersonalData';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      { !isLogged ? <Login setIsLogged={setIsLogged}/> : <PersonalData setIsLogged={setIsLogged} /> }
    </>
  )
}

export default App
