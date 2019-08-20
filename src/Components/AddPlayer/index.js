import React, { Component } from 'react';

export default class AddPlayer extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlayer(this.state.name)
    }

    handleChange = (event) => {
        console.log(event.target)
        this.setState({
          [event.target.name]: event.target.value
        })
    }

  render() {
      console.log(this.state)
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input onChange={this.handleChange} type="text" name="name" />
            Age:
            <input onChange={this.handleChange} type="text" name="age" />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

