import React from 'react'

export default ({ recordMove, value, x, y }) => (
  <button className="piece" onClick={() => !value && recordMove(x, y)}>
    {!!value && <div className={`circle ${value === 1 ? 'black' : 'white'}`} />}
  </button>
)
