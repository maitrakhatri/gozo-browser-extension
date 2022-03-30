import { useEffect, useState } from 'react';
import  {InUseApp, UserOnboarding} from "./Pages/index"
import wallpapers from "./Database/wallpaper"

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
    <div className="app" style={{backgroundImage: `url("${wallpaperURL}")`, backgroundSize: "cover"}}>

      {username === null? <UserOnboarding /> : <InUseApp />}
      
    </div>
  );    
}
export default App;