import React, { Component } from 'react'

class Piece extends Component {
  state = { color: 0 }

  handleClick = _ => {
    const { current, handleClick, x, y } = this.props
    this.setState(state => {
      return {
        color: current,
      }
    })
    handleClick(x, y)
  }
  render() {
    const { color } = this.state

    return (
      <button id={this.props.id} className="piece" onClick={this.handleClick}>
        {color === 2 && <div className="circle white" />}
        {color === 1 && <div className="circle black" />}
      </button>
    )
  }
}

export default Piece
