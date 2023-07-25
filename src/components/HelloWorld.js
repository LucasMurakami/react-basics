//Functional component

import React from "react"

const HelloWorld = () => {

    function handleClick() {
        alert("Button Clicked!")
    }

    const name = "Teste"

    const myElement = 
    (<div>
        <h1 className="title"> Title </h1>
        <h2> Sub-Title</h2>
        <p>Example</p>
        <p>{name}</p>
        <button onClick={handleClick}> Click! </button>
    </div>)

    //React.createElement('h1', null, 'Hello World! ')

    return myElement;
}

export default HelloWorld