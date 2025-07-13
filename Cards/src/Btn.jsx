const Btn =()=>{
     let doSomething =()=>{
  alert("Btn clicked")
 }
//  let hover =()=>{
//   alert("mouse on btn")
//  }
    return(
         <button onClick={doSomething} /*onMouseOver={hover}*/ >Click me</button>
    )
}
export default Btn;