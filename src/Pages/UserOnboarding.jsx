export function UserOnboarding() {

    function nameHandler(e) {
        if(e.key === 'Enter'){
            localStorage.setItem("name", e.target.value)
            window.location.reload(false)
        }
    }

    return (
        <div className="UserOnboarding">
            <h1>Hey !! What should I call you ?</h1>
            <h1><input type="text" onKeyPress={nameHandler}/></h1>
        </div>
    )
}