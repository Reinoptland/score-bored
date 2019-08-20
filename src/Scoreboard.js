import React, { Component } from "react";
import Player from "./Components/Player";
import AddPlayer from "./Components/AddPlayer";

export default class Scoreboard extends Component {
  state = {
      players: [
          { name: 'Arien', score: 91 },
          { name: 'Rein', score: 91 },
          { name: 'Mimi', score: 91 },
      ]
  }
  
  incrementScore = (name) => {
    console.log(this)
    console.log('INSIDE SCOREBOARD', name)
    // calculate score
    const newPlayers = this.state.players.map(player => {
        if(player.name === name){
            // this person scored
            return {
                name: player.name,
                score: player.score + 1
            }
        }
        // no score
        return player
    })

    this.setState({ players: newPlayers })
  }

  addPlayer = (name) => {
    const player = {
      id: Math.round(Math.random()*100000),
      name,
      score: 0
    }
    this.setState({
      players: this.state.players.concat(player)
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
            {
                [...this.state.players]
                    .sort((a, b) => b.score - a.score)
                    .map(({ name, score }) => {
                    return <Player 
                        key={name} 
                        name={name} 
                        score={score} 
                        incrementScore={this.incrementScore}
                    />
                })
            }
        </ul>
        <AddPlayer addPlayer={this.addPlayer}/>
      </div>
    )
  }
}
