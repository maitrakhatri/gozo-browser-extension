import { createContext, useContext, useState } from "react";

const TimeContext = createContext()

function TimeProvider({children}) {

    const [time, setTime] = useState("")

    function getTime() {
        setTimeout(() => {
            const date = new Date();
            const time = date.toLocaleTimeString('en-GB');
            setTime(time)
        }, 1000);
    }

    return (
        <TimeContext.Provider value={{time, getTime}}>
            {children}
        </TimeContext.Provider>
    )
}

const useTime = () => useContext(TimeContext)

export {TimeProvider, useTime}