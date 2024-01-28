import React from 'react'
import { createContext } from 'react'
import ChildX from './childX'

const StudentContext = createContext()
export default function ContextApi() {
    const student = {
        name: "Amit negi",
        email: "amitnegiit23@gmail.com",
        phone: 9528594371,
        age: 23
    }
    return (
        <StudentContext.Provider value={student}>
            <div>
                <h1>Topic:- ContextApi</h1>
                <ChildX />
            </div>
        </StudentContext.Provider>
    )
}

export {StudentContext};