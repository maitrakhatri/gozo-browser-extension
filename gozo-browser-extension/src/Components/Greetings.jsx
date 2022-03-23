import { useEffect, useState } from "react";
import { useTime } from "./time-context";

export function Greetings() {

    const {time} = useTime(); 
    const [greet, setGreet] = useState("");
    const [username, setUsername] = useState("")

    useEffect(() => {
        time.slice(0,-6) >11? setGreet("Good Evening") : setGreet("Good Morning");
        setUsername(localStorage.getItem("name"))
    },[time])

    return <div class="greeting">
        <h1>{greet}, {username} !!</h1>
    </div>;
}