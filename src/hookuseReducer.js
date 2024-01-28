import React, { useReducer } from 'react'

export default function Counter() {
    const initialstate = 0
    const reducer = (state, action) => {
        switch (action) {
            case "Increment":
                return state + 1
            case "Decrement":
                return state - 1
            default:
                return state
        }

    }

    const [score, dispatch] = useReducer(reducer, initialstate)

    return (
        <div>
            <h1>Topic:- useReducer</h1>
            <h2>Your score is {score} </h2>
            <button style={{ marginRight: 10 }} onClick={() => dispatch("Increment")}>Increment</button>
            <button onClick={() => dispatch("Decrement")}>Decrement</button>
        </div>
    )
    
}
