import React, { useReducer } from 'react'

const Counter = () => {
  const countReducer = (state, action) => {
    switch (action.type) {
      case 'add': {
        return state + 1
      }
      case 'subtract': {
        return state - 1
      }
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(countReducer, 0)
  return (
    <div>
      <h2>This is the current count: {count}</h2>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'subtract' })}>-</button>
    </div>
  )
}
export default Counter
