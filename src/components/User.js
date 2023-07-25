import { useState } from "react"

const User = () => {

    // const [firstName, setFirstName] = useState('Lucas')
    // const [lastName, setLastName] = useState('Murakami')
    // const [email, setEmail] = useState('lucaskaitomurakami@gmail.com')

    const [user, setUser] = useState ({
        firstName: "Lucas",
        lastName: "Murakami",
        email: "lucaskaitomurakami@gmail.com"
    })

    function updateUser() {
        // setFirstName('Example')
        // setLastName('Teste')
        // setEmail('teste@gmail.com')
        setUser({
            firstName: "Example",
            lastName: "Teste",
            email: "teste@gmail.com"
        })
        
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>

            <button onClick={updateUser}>Update User</button>
        </div>
    )

}

export default User