import React from 'react'
const Hello=()=>{
    return (
<h2>This is other Component</h2>
    )
}
const Hello2=()=>{
    return (
<h2>This is other Component Exported using named export</h2>
    )
}
export default Hello; //default Export
// export  {Hello};  -->Named export
// export  {Hello2}; -->Named export