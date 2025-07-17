import './App.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
function App() {
  let clicked= ()=>{
    alert("btn Clicked !")
  }
  let send= ()=>{
    alert("msg sended !")
  }
  return (
    <>
    <Button variant="outlined" onClick={clicked} >Outlined</Button>
     <Button variant="contained" onClick={send} endIcon={<SendIcon />}>
        Send
      </Button>
    </>
  )
}

export default App
