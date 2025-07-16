import React, { useState } from "react";
import "./App.css";

function App() {
  let [ticket, setTicket] = useState();
  let [Result, setResult] = useState();
  let sum = 0;
  let getTicket = () => {
    ticket = Math.floor(Math.random() * 999 + 1);
    if (ticket < 10) {
      ticket = "00" + ticket;
      setTicket(ticket);
    } else if (ticket > 9 && ticket < 100) {
      ticket = "0" + ticket;
      setTicket(ticket);
    } else {
      setTicket(ticket);
    }
    while (ticket > 0) {
      sum += ticket % 10;
      ticket /= 10;
      sum = Math.floor(sum);
    }
    console.log(sum);
    {
      sum == 15 ? setResult("You Won") : setResult("You Loose");
    }
  };
  return (
    <>
      <h1>Get ticket</h1>
      <h1>{Result}</h1>
      <h2>{ticket}</h2>
      <br />
      <button onClick={getTicket}>Get Ticket</button>
    </>
  );
}

export default App;
