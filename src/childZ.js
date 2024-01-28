import React from 'react'
import { FacultyContext, StudentContext } from './contextApi'
export default function ChildZ() {
    return (
        <div>
            <span>ChildZ</span>
            <StudentContext.Consumer> 
                {
                    (student) => {
                        return (
                            <>
                                <div>Hello I am <b>{student.name}</b>. I am <b>{student.age}</b> year old. Contact me <b>{student.phone}</b>. My email <b>{student.email}</b></div>
                                <FacultyContext.Consumer>
                                    {
                                        (faculty) => {
                                            return (
                                                <div>Hello I am <b>{faculty.name}</b>. I am <b>{faculty.age}</b> year old. Contact me <b>{faculty.phone}</b>. My email <b>{faculty.email}</b></div>
                                        )
                                        }
                                    }
                                </FacultyContext.Consumer>
                            </>
                        )
                    }
                }
            </StudentContext.Consumer>
        </div>
    )
}
