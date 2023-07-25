import React from "react"

class Employee extends React.Component {

    constructor(props){

        super(props)

        this.state = {
            firstName: "Lucas",
            lastName: "Murakami",
            email: "lucaskaitomurakami@gmail.com"
        }

    }

    updateEmployee() {
        this.setState( {
            firstName: "Teste",
            lastName: "Example",
            email: "teste@gmail.com"
        })
    }

    render() {
        return (
            <div>
                <h1> Employee Details</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <button onClick={() => this.updateEmployee()}> updateEmployee </button>
            </div>
        )
    }
}

export default Employee