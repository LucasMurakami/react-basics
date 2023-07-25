import { useState } from "react"

const ConditionRendering = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    let message;
    if(isLoggedIn){
        message = <p> Welcome, User </p>
    }else{
        message = <p> Please, Login! </p>
    }

    function handleLogin() {
        setIsLoggedIn(true)
    }

    function handleLogout() {
        setIsLoggedIn(false)
    }

    return (
        <div>
            {isLoggedIn ? <p> Welcome, User </p> : <p> Please, Login! </p>}
            {isLoggedIn && <p> Welcome, User </p>}
            <br></br>

            <button onClick={handleLogin}> Login </button>
            <button onClick={handleLogout}> Logout </button>
        </div>
    )
}

export default ConditionRendering