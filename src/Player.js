import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Player extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }


//   incrementScore = () => {
//       console.log('INCREMENT')
//   }

  render() {
      console.log('PLAYA PROPS', this.props)

    const { name, score, incrementScore }= this.props
    return (
      <li className="player">
        <p className="name">{ name }</p>
        <p className="name">SCORE: { score }</p>
        <button onClick={() => incrementScore(name)}>+</button>
      </li>
    )
  }
}