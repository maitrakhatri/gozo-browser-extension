import { useEffect, useState } from 'react';
import './App.css';
import InUseApp from './InUseApp';
import UserOnboarding from './UserOnboarding';

function App() {

  const [username, setUsername] = useState(null)

  useEffect(() => {
    const name = localStorage.getItem("name")
    setUsername(name)
  },[])

  return (
    <div className="app">

      {username === null? <UserOnboarding /> : <InUseApp />}
      
    </div>
  );    
}
export default App;