import React from "react";
function ChildC({data}) {
   console.log(data,"childc")
    return (
        <div>
            <p>My name is <b>{data.name}</b> and my email is <b>{data.email}</b></p>
        </div>
    )
}

export default ChildC;