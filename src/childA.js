import React from "react";
import ChildB from "./childB"
function ChildA({data}) {
   
    return (
        <div>
           <ChildB data={data}/>
        </div>
    )
}

export default ChildA;