
import './styles/App.css';
import GreetingHelloComponent from './greetings/greetingHello'
import GreetingHelloComponentChild from './greetings/greetingHelloChild'
import Сounter from './counter';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <div className='greeting-items'>
        <GreetingHelloComponent greeting="Hello"></GreetingHelloComponent>
        <GreetingHelloComponentChild>Hello</GreetingHelloComponentChild>
      </div>
      <div className='counter-inner'>
        <div className='counter'>
          <Сounter></Сounter>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
