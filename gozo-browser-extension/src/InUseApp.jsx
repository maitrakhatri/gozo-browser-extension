import {Weather, Clock, Greetings, MainFocus, Quote} from "./Components/components-index"

export default function InUseApp() {
    return (
        <div className="InUseApp">
            <Weather />
            <div class="center">
            
              <Clock />
              <Greetings />
              <MainFocus />
              <Quote />
            </div>
        </div>
    )
}