import {Weather, Clock, Greetings, MainFocus, Quote} from "../Components/index"

export function InUseApp() {
    return (
        <div className="InUseApp">
            <Weather />
            <div className="center">
            
              <Clock />
              <Greetings />
              <MainFocus />
              <Quote />
            </div>
        </div>
    )
}