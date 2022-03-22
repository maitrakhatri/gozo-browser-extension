import { useEffect, useState } from "react";
import { useTime } from "./time-context";

export function Greetings() {

    const {time} = useTime(); 

    const [greet, setGreet] = useState("");

    useEffect(() => {
        time.slice(0,-6) >11? setGreet("Good Evening") : setGreet("Good Morning")
    },[time])

    return <div class="greeting">
        <h1>{greet}, Maitra !!</h1>
    </div>;
}