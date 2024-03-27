import React, { useEffect, useState, useRef } from 'react'

export default function UseRef() {
    const count = useRef(0);
    console.log(count)
    const [inputValue , setInputValue] = useState()

    useEffect(()=>{
            count.current+=1
    })
   
    function handleInput(e){
            setInputValue(e.target.value)
    }
    return (
        <div>
            <h1>Topic:- UseRef</h1>
            <h2>Render Count: {count.current}</h2>
            <input type='text' value={inputValue} onChange={handleInput}/>
        </div>
    )
}
