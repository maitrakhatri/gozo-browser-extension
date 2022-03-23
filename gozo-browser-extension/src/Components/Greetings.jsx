import { useEffect, useState } from "react";
import { useTime } from "./time-context";

export function Greetings() {

    const {time} = useTime(); 
    const [greet, setGreet] = useState("");
    const [username, setUsername] = useState("")

    useEffect(() => {
        if(time.slice(0,-6) < 11) {
            setGreet("Good Morning")
        }
        if(time.slice(0,-6) >11 && time.slice(0,-6) < 17 ) {
            setGreet("Good Afternoon")
        }
        if(time.slice(0,-6) > 17) {
            setGreet("Good Evening")
        }
         
        setUsername(localStorage.getItem("name"))
    },[time])

    return <div class="greeting">
        <h1>{greet}, {username} !!</h1>
    </div>;
}