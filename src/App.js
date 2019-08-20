import React from 'react';
import './App.css';
import Title from './Title';
import Scoreboard from './Scoreboard'

class App extends React.Component {
  render(){
    return <div>
      <Title content="SCORE-BORED"/>
      <Title content="I AM BEING (RE)USED!"/>
      <Scoreboard />
    </div>
  }
}

export default App