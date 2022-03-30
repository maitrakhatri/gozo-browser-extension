import { useEffect } from "react";
import { useTime } from "../Context/time-context";

export function Clock() {

    const {time, getTime} = useTime()

    useEffect(getTime)
    
    return <div class="clock">
        <h1>{time.slice(0, -3)}</h1>
    </div>;
}