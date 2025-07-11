import "./App.css";
import "./Hello";
import Hello from "./Hello";//default import
// import {Hello2,Hello} from "./Hello"; // named import
function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Hello />
    </>
  );
}

export default App;
