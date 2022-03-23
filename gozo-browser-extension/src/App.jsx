import { useEffect, useState } from 'react';
import './App.css';
import InUseApp from './InUseApp';
import UserOnboarding from './UserOnboarding';
import wallpapers from "./wallpaper"

function App() {

  const [username, setUsername] = useState(null)

  useEffect(() => {
    const name = localStorage.getItem("name")
    setUsername(name)
  },[])

  function getRandomWallpaper(wallpapers) {
    return wallpapers[Math.floor(Math.random()*wallpapers.length)]
  }

  const wallpaperURL = getRandomWallpaper(wallpapers)

  return (
    <div className="app" style={{backgroundImage: `url("${wallpaperURL}")`}}>

      {username === null? <UserOnboarding /> : <InUseApp />}
      
    </div>
  );    
}
export default App;