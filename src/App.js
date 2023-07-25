import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import { Component, FirstComponent as FC, SecondComponent } from './components/MyComponent';
import HelloWorld from './components/HelloWorld';
import Student from './components/Student';
import Employee from './components/Employee';
import User from './components/User';
import EventHandling from './components/EventHandling';
import ConditionRendering from './components/CondicionalRendering';

function App() {

  // const student = {
  //   firstName: "Lucas",
  //   lastName: "Murakami",
  //   email: "lucaskaitomurakami@gmail.com"
  // }

  const skills = ['HTML', 'CSS', 'JAVASCRIPT'];

  return (

    
    <div className="App">
      <header className="App-header">
        {/* <Welcome name="Lucas"/>
        <Greeting name= "Murakami"/>
        <Component/>
        <FC/>
        <SecondComponent/> */}

        {/* <HelloWorld/> */}

        {/* <Student data = {skills}/> */}

        {/* <Student firstName = "Lucas" lastName = "Murakami" email = "lucaskaitomurakami@gmail.com"/> */}

        {/* <Employee/> */}

        {/* <User/> */}

        {/* <EventHandling/> */}

        <ConditionRendering/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
