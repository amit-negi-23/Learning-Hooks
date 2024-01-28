import React from "react";
import ChildC from "./childC"
function ChildB({data}) {
   
    return (
        <div>
           <ChildC data={data}/>
        </div>
    )
}

export default ChildB;