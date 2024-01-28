import React from 'react'
import { createContext } from 'react'
import ChildX from './childX'

const StudentContext = createContext()
const FacultyContext = createContext()
export default function ContextApi() {
    const student = {
        name: "Amit negi",
        email: "amitnegiit23@gmail.com",
        phone: 9528594371,
        age: 23
    }
    const faculty = {
        name: "Shradha",
        email: "Shradha@gmail.com",
        phone: 1234567891,
        age: 24
    }
    return (
        <StudentContext.Provider value={student}>
            <FacultyContext.Provider value={faculty}>
                <div>
                    <h1>Topic:- ContextApi</h1>
                    <ChildX />
                </div>
            </FacultyContext.Provider>
        </StudentContext.Provider>
    )
}

export { StudentContext, FacultyContext };