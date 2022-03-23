import { useEffect, useState } from "react";

export function MainFocus() {

    //Enter Main Focus Component
    function EnterMainFocus() {
        return (
            <div className="enter-main-focus">
                <h1>What's your main focus for today ?</h1>
                <h1><input type="text" onKeyPress={mainFocusHandler}/></h1>
            </div>
        )
    }

    //Show Main Focus Component
    function ShowMainFocus() {
        return (
            <div className="show-main-focus">
                <h1>My main focus today is {displayFocus} </h1> <button onClick={editHandler}>Edit</button>
            </div>
        )
    }

    //add main focus to local storage and display on pressing Enter key
    function mainFocusHandler(e) {
        if(e.key === 'Enter') {
            localStorage.setItem('mainFocus', JSON.stringify({
                focus: e.target.value,
                date: now.getDate()
            }));
            setDisplayFocus(e.target.value)
            setEdit(false)
        }
    }

    //Clears focus from local storage if the Date has changed
    function clearYesterdaysFocus() {
        if(focusObj != null) {
            const sameDay = now.getDate() === focusObj.date
            if(!sameDay) {
                localStorage.removeItem('mainFocus')
            }
        }
    }

    //Enables Edit feature
    const editHandler = () => setEdit(true)

    const [displayFocus, setDisplayFocus] = useState(null)
    const [edit, setEdit] = useState(false)

    const now = new Date();
    const focusObj = JSON.parse(localStorage.getItem('mainFocus'));

    //Setting focus from local storage
    useEffect(() => {
        focusObj === null ? setDisplayFocus(null) : setDisplayFocus(focusObj.focus);
    }, [displayFocus])

    useEffect(() => {
        clearYesterdaysFocus()
    }, [displayFocus])

    return <div class="main-focus">
        {displayFocus === null || edit ? <EnterMainFocus/> : <ShowMainFocus />}
    </div>;
}