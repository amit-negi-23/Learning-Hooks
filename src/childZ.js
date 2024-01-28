import React from 'react'
import { StudentContext } from './contextApi'
export default function ChildZ() {
    return (
        <div>
            <span>ChildZ</span>
            <StudentContext.Consumer>
                {
                    (student) => {
                        return (

                            <div>Hello I am <b>{student.name}</b>. I am <b>{student.age}</b> year old. Contact me <b>{student.phone}</b>. My email <b>{student.email}</b></div>
                        )
                    }
                }
            </StudentContext.Consumer>
        </div>
    )
}
