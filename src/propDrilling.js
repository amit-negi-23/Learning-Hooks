import React from "react";
import ChildA from "./childA"

function PropDrilling() {
    const student = {
        name: "Amit negi",
        email: "amitnegiit23@gmail.com",
    }
    return (
        <div>
            <h1>Topic:- PropDrilling</h1>
            <ChildA data={student} />
        </div>
    )
}

export default PropDrilling;