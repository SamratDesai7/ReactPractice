const Form=()=>{
    let handleFormSubmit = (event)=>{
        event.preventDefault()
        console.log("Form Submited")
    }
    return(
        <form action="">
            <input type="text" placeholder="Enter Something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}
export default Form;