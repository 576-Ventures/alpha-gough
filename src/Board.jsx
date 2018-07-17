import React from 'react';

class Board extends React.Component {
  onClick(id) {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
      this.props.events.endTurn();
    }
  }

  isActive(id) {
    if (!this.props.isActive) return false;
    if (this.props.G.cells[id] !== null) return false;
    return true;
  }

  render() {
    const { ctx, G } = this.props;
    let winner = '';
    if (ctx.gameover) {
      winner =
        ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    const cellStyle = {
      border: '1px solid #555',
      width: '40px',
      height: '40px',
      lineHeight: '40px',
      textAlign: 'center',
    };

    let tbody = [];
    for (let i = 0; i < G.cells.length; i++) {
      let cells = [];
      for (let j = 0; j < G.cells.length; j++) {
        const id = G.cells.length * i + j;
        cells.push(
          <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
            {G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        {winner}
      </div>
    );
  }
}

export default Board; 
