import React from 'react'
const Component =({name,color,})=>{
    return(
        <>
        <div className="card">
            <h1  style={color} >Hello {name}</h1>
        </div>
        </>
    )
}

export default Component