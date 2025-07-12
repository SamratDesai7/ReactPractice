import "./App.css";
import Component from "./Component";

function App() {
  return (
    <>
      <Component name="Samrat" color={{ backgroundColor: "red" }} />
      <Component name="Vinay" color={{ backgroundColor: "green" }} />
      <Component name="Prajwal" color={{ backgroundColor: "Yellow" }} />
      <Component name="Avishkar" color={{ backgroundColor: "Pink" }} />
      <Component name="Sahil" color={{ backgroundColor: "gray" }} />
    </>
  );
}

export default App;
