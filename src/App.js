
import './styles/App.css';
import GreetingHelloComponent from './greetings/greetingHello'
import GreetingHelloComponentChild from './greetings/greetingHelloChild'
import Сounter from './counter';
import React from 'react';


function App() {
  return (
    <div className='greeting'>
      <div className='greeting-items'>
        <GreetingHelloComponent greeting="Hello"></GreetingHelloComponent>
        <GreetingHelloComponentChild>Hello</GreetingHelloComponentChild>
      </div>
      <div className='counter'>
        <Сounter></Сounter>
      </div>
    </div>
  );
}

export default App;
