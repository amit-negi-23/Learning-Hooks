import React, { useContext } from 'react'
import { FacultyContext, StudentContext } from './contextApi'
export default function ChildZ() {
    const student = useContext(StudentContext)
    const faculty = useContext(FacultyContext)
    return (
        <div>
            <span>ChildZ</span>
            <div>Hello I am <b>{student.name}</b>. I am <b>{student.age}</b> year old. Contact me <b>{student.phone}</b>. My email <b>{student.email}</b></div>
            <div>Hello I am <b>{faculty.name}</b>. I am <b>{faculty.age}</b> year old. Contact me <b>{faculty.phone}</b>. My email <b>{faculty.email}</b></div>
        </div>
    )
}
