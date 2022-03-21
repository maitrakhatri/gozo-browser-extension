import './App.css';
import {Weather, Clock, Greetings, MainFocus, Quote} from "./Components/components-index"

function App() {
  return (
    <div className="app">

        <Weather />
        <div class="center">
            <Clock />
            <Greetings />
            <MainFocus />
            <Quote />
        </div>
    </div>
  );    
}
export default App;