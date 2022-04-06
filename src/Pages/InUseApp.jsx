import {Weather, Clock, Greetings, MainFocus, Quote, Firefox} from "../Components"

export function InUseApp() {
    return (
        <div className="InUseApp">
            <Firefox />
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